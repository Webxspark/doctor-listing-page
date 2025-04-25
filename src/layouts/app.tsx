import AppHeader from "../components/header.tsx";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <AppHeader/>
            <div className={'max-w-5xl w-full mx-auto my-5'}>
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;