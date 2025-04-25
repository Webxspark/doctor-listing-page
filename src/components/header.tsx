import {Input} from "@/components/ui/input.tsx";
import {Search} from "lucide-react";
import {Label} from "@/components/ui/label.tsx";

const AppHeader = () => {
    return (
        <div className={'max-h-20 bg-[#005eac] h-full py-4'}>
            <div className={'relative max-w-7xl mx-auto flex items-center justify-between'}>
                <Input
                    id={'search'}
                    className={'bg-white mx-auto focus-visible:border-none focus-visible:ring-none rounded-lg'}
                    placeholder={'Search Symptoms, Doctors, Specialists, Clinics'}
                    data-testid={'autocomplete-input'}
                />
                <Label htmlFor={'search'}>
                    <Search className={'absolute top-2 right-4'} size={18}/>
                </Label>
            </div>
        </div>
    );
};

export default AppHeader;