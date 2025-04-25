import {IDoctor} from "@/types/shared";
import React from "react";

export interface IGlobalContext {
    doctors: IDoctor[];
    setDoctors: React.Dispatch<React.SetStateAction<IDoctor[]>>;

    filteredDoctors: IDoctor[];
    setFilteredDoctors: React.Dispatch<React.SetStateAction<IDoctor[]>>;

    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

    selectedDoctor: IDoctor | null;
    setSelectedDoctor: React.Dispatch<React.SetStateAction<IDoctor | null>>;

    activeFilters: {
        [key: string]: string[];
    }
    setActiveFilters: React.Dispatch<React.SetStateAction<{
        [key: string]: string[];
    }>>;

    clearFilters: () => void;

}