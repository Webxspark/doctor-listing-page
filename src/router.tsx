import {createBrowserRouter} from "react-router-dom";
import App from "@/pages/App.tsx";
import AppLayout from "@/layouts/app.tsx";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
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