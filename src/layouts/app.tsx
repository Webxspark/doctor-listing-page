import AppHeader from "../components/header.tsx";
import {Outlet} from "react-router-dom";
import SortFilter from "@/components/sort-filter.tsx";
import GenFilters from "@/components/gen-filters.tsx";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {GlobalContext} from "@/contexts/globalContext.tsx";
import {LoaderCircle} from "lucide-react";

const AppLayout = () => {
    const [loading, setLoading] = useState(false);
    const {doctors, setDoctors} = useContext(GlobalContext);
    const isMounted = useRef(false);

    const middleware = useCallback(() => {
        if (doctors.length === 0) {
            setLoading(true);
            fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json')
                .then((res) => res.json())
                .then((data) => {
                    setDoctors(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [doctors.length, setDoctors])

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            middleware();
        }
    }, [middleware]);
    return (
        <div>
            <AppHeader/>
            <div className={'max-w-5xl w-full mx-auto my-5'}>
                <div className={'grid grid-cols-12 gap-6 mx-12'}>
                    <div className="lg:col-span-5 col-span-12 md:col-span-6">
                        <div className={'grid gap-3'}>
                            <SortFilter/>
                            <GenFilters/>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12 md:col-span-6">
                        {loading && <div className={'flex items-center justify-center h-[90dvh]'}>
                                <LoaderCircle className={'animate-spin size-7'}/>
                            </div>
                            || <Outlet/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppLayout;