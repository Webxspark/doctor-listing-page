import {createContext} from "react";
import {IGlobalContext} from "@/types/globalContext";
import React from "react";

interface PageProps  {
    children: React.ReactNode;
}
const GlobalContext = createContext({} as IGlobalContext);

export const GlobalContextProvider = ({children}: PageProps) => {
    return (
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}