import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {AppRoutes} from "@/router.tsx";
import {GlobalContextProvider} from "@/contexts/globalContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalContextProvider>
            <RouterProvider router={AppRoutes}/>
        </GlobalContextProvider>
    </StrictMode>,
)
