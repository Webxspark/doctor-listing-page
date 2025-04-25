import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";
import {FILTERS} from "@/constants/filters.ts";

const SpecialitiesFilter = () => {
    return (
        <div>
            <h1 className={'text-lg font-semibold text-gray-600/90'}>
                Specialities
            </h1>
            <div className={'grid gap-2 mt-2 max-h-[200px] overflow-y-auto'}>
                {
                    FILTERS.specialities.map((item) => (
                        <div className={'flex items-center gap-2'}>
                            <Checkbox
                                id={item.label}
                                data-testid={item.testid}
                            />
                            <Label htmlFor={item.label} className={'text-base'}>{item.label}</Label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SpecialitiesFilter;