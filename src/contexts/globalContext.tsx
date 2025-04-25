import {createContext, useEffect, useState} from "react";
import {IGlobalContext} from "@/types/globalContext";
import React from "react";
import {IDoctor} from "@/types/shared";
import {useSearchParams} from "react-router-dom";
import queryString from "query-string";

interface PageProps {
    children: React.ReactNode;
}
export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalContextProvider = ({children}: PageProps) => {
    const [doctors, setDoctors] = useState<IDoctor[]>([]);
    const [filteredDoctors, setFilteredDoctors] = useState<IDoctor[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null);
    const [activeFilters, setActiveFilters] = useState<{
        [key: string]: string[];
    }>({
        specialities: [],
        consultation: [],
    });
    const [sortOption, setSortOption] = useState<string | null>(null);
    const [_, setSearchParams] = useSearchParams();
    console.log(_)

    const clearFilters = () => {
        setActiveFilters({
            specialities: [],
            consultation: [],
        });
        setSortOption(null);
    };

    const out: IGlobalContext = {
        doctors,
        setDoctors,
        filteredDoctors,
        setFilteredDoctors,
        searchQuery,
        setSearchQuery,
        selectedDoctor,
        setSelectedDoctor,
        activeFilters,
        setActiveFilters,
        clearFilters,
        sortOption,
        setSortOption,
    };

    useEffect(() => {
        let filtered = [...doctors]; // Ensure a new array reference

        // Apply filters
        Object.keys(activeFilters).forEach((key) => {
            const filterValues = activeFilters[key];
            if (filterValues.length > 0) {
                filtered = filtered.filter((doctor) => {
                    if (key === "specialities") {
                        return filterValues.some((value) =>
                            doctor.specialities.some((s) => s.name === value)
                        );
                    } else if (key === "consultation") {
                        return (
                            (filterValues.includes("Video Consultation") && doctor.video_consult) ||
                            (filterValues.includes("In Clinic") && doctor.in_clinic)
                        );
                    }
                    return true;
                });
            }
        });

        // Apply search query
        if (searchQuery) {
            filtered = filtered.filter((doctor) =>
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply sorting
        if (sortOption === "sort-fees") {
            filtered.sort((a, b) => {
                const feeA = parseFloat(a.fees.replace(/[^\d.]/g, ""));
                const feeB = parseFloat(b.fees.replace(/[^\d.]/g, ""));
                return feeA - feeB;
            });
        } else if (sortOption === "sort-experience") {
            filtered.sort((a, b) => {
                const expA = parseFloat(a.experience.replace(/[^\d.]/g, ""));
                const expB = parseFloat(b.experience.replace(/[^\d.]/g, ""));
                return expB - expA;
            });
        }

        setFilteredDoctors(filtered);
    }, [doctors, activeFilters, sortOption, searchQuery]);

    useEffect(() => {
        const parsedParams = queryString.parse(window.location.search, { arrayFormat: "bracket" });
        const specialities = parsedParams.specialities || [];
        const consultation = parsedParams.consultation || null;
        const sort = parsedParams.sort || null;
        const search = parsedParams.search || "";

        const validSpecialities = Array.isArray(specialities)
            ? specialities.filter((s): s is string => s !== null)
            : [specialities].filter((s): s is string => s !== null);

        const validConsultation = consultation
            ? (Array.isArray(consultation)
                ? consultation.filter((c): c is string => c !== null)
                : [consultation].filter((c): c is string => c !== null))
            : [];

        setActiveFilters({
            specialities: validSpecialities,
            consultation: validConsultation,
        });
        setSortOption(sort as string | null);
        setSearchQuery(search as string);
    }, []);

    useEffect(() => {
        if (
            activeFilters.specialities.length > 0 ||
            activeFilters.consultation.length > 0 ||
            sortOption ||
            searchQuery
        ) {
            const params = queryString.stringify(
                {
                    specialities: activeFilters.specialities,
                    consultation: activeFilters.consultation[0],
                    sort: sortOption,
                    search: searchQuery,
                },
                { arrayFormat: "bracket" }
            );

            setSearchParams(params, { replace: true });
        } else {
            setSearchParams({}, { replace: true });
        }
    }, [activeFilters, sortOption, searchQuery, setSearchParams]);
    return (
        <GlobalContext.Provider value={out}>
            {children}
        </GlobalContext.Provider>
    );
};