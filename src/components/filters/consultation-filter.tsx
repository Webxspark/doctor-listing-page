import {Label} from "@/components/ui/label.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {FILTERS} from "@/constants/filters.ts";
import {useContext} from "react";
import {GlobalContext} from "@/contexts/globalContext.tsx";

const ConsultationFilter = () => {
    const {activeFilters, setActiveFilters} = useContext(GlobalContext);

    return (
        <div data-testid={'filter-header-moc'}>
            <h1 className={'text-lg font-semibold text-gray-600/90'}>
                Mode of consultation
            </h1>
            <RadioGroup
                value={activeFilters.consultation.length === 0 ? 'All' : activeFilters.consultation[0]}
                onValueChange={(value) => {
                    setActiveFilters((prev) => ({
                        ...prev,
                        consultation: value === 'All' ? [] : [value],
                    }));
                }}
                className={'grid gap-2 mt-2'}
            >
                {FILTERS.consultations.map((item, index) => (
                    <div key={index} className={'flex items-center gap-2'}>
                        <RadioGroupItem
                            id={item.label}
                            value={item.label}
                            data-testid={item.testid}
                        />
                        <Label
                            className={'text-base'}
                            htmlFor={item.label}
                        >
                            {item.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default ConsultationFilter;