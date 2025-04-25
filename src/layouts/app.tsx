import AppHeader from "../components/header.tsx";
import {Outlet} from "react-router-dom";
import SortFilter from "@/components/sort-filter.tsx";
import GenFilters from "@/components/gen-filters.tsx";

const AppLayout = () => {
    return (
        <div>
            <AppHeader/>
            <div className={'max-w-5xl w-full mx-auto my-5'}>
                <div className={'grid grid-cols-12 gap-6'}>
                    <div className="col-span-5">
                        <div className={'grid gap-3'}>
                            <SortFilter/>
                            <GenFilters/>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppLayout;