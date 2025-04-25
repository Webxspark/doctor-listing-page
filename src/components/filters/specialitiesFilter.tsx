import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";
import {FILTERS} from "@/constants/filters.ts";
import {useContext} from "react";
import {GlobalContext} from "@/contexts/globalContext.tsx";

const SpecialitiesFilter = () => {
    const {activeFilters, setActiveFilters} = useContext(GlobalContext);

    return (
        <div data-testid={'filter-header-speciality'}>
            <h1 className={'text-lg font-semibold text-gray-600/90'}>
                Specialities
            </h1>
            <div className={'grid gap-2 mt-2 max-h-[200px] overflow-y-auto'}>
                {FILTERS.specialities.map((item) => (
                    <div key={item.label} className={'flex items-center gap-2'}>
                        <Checkbox
                            onCheckedChange={(checked) => {
                                setActiveFilters((prev) => {
                                    const updatedSpecialities = checked
                                        ? Array.from(new Set([...prev.specialities, item.label]))
                                        : prev.specialities.filter((s) => s !== item.label);
                                    return {
                                        ...prev,
                                        specialities: updatedSpecialities,
                                    };
                                });
                            }}
                            id={item.label}
                            data-testid={item.testid}
                            checked={activeFilters.specialities.includes(item.label)}
                        />
                        <Label htmlFor={item.label} className={'text-base'}>
                            {item.label}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialitiesFilter;