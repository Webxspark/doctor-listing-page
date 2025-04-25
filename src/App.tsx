import './App.css'
import AppLayout from "./layouts/app.tsx";
import SortFilter from "@/components/sort-filter.tsx";
import GenFilters from "@/components/gen-filters.tsx";

function App() {

    return (
        <AppLayout>
            <div className={'grid grid-cols-12 gap-6'}>
                <div className="col-span-5">
                    <div className={'grid gap-3'}>
                        <SortFilter />
                        <GenFilters />
                    </div>
                </div>
                <div className="col-span-7">hello</div>
            </div>
        </AppLayout>
    )
}

export default App
