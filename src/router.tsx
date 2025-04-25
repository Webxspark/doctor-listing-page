import {createBrowserRouter} from "react-router-dom";
import App from "@/pages/App.tsx";
import Index from "@/index.tsx";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/query/:query",
                element: <>Hi</>
            }
        ]
    }
]);