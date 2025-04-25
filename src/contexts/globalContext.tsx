import {createContext, useState} from "react";
import {IGlobalContext} from "@/types/globalContext";
import React from "react";
import {IDoctor} from "@/types/shared";

interface PageProps  {
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
    }>({});
    const clearFilters = () => {
        setActiveFilters({});
        setFilteredDoctors(doctors);
    }
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
        clearFilters
    }
    return (
        <GlobalContext.Provider value={out}>
            {children}
        </GlobalContext.Provider>
    )
}