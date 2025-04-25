import {Label} from "@/components/ui/label.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {FILTERS} from "@/constants/filters.ts";

const ConsultationFilter = () => {
    return (
        <div data-testid={'filter-header-moc'}>
            <h1 className={'text-lg font-semibold text-gray-600/90'}>
                Mode of consultation
            </h1>
            <RadioGroup className={'grid gap-2 mt-2'}>
                {
                    FILTERS.consultations.map((item, index) => (<div key={index} className={'flex items-center gap-2'}>
                        <RadioGroupItem
                            id={item.label}
                            value={item.label}
                            data-testid={item.testid}
                        />
                        <Label
                            className={'text-base'} htmlFor={item.label}>{item.label}</Label>
                    </div>))
                }
            </RadioGroup>
        </div>
    );
};

export default ConsultationFilter;