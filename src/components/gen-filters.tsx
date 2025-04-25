import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import SpecialitiesFilter from "@/components/filters/specialitiesFilter.tsx";
import ConsultationFilter from "@/components/filters/consultation-filter.tsx";

const GeneralFilters = () => {
    return (
        <Card className={'gap-1'}>
            <CardHeader className={'border-b-1 border-b-gray-200'}>
                <div className={'flex items-center justify-between text-gray-900/90'}>
                    <h1 className={'text-lg font-semibold '}>Filters</h1>
                    <Button
                        variant={"link"}
                        className={'text-blue-500 hover:text-blue-600'}
                    >
                        Clear All
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className={'grid gap-3'}>
                    <SpecialitiesFilter/>
                    <hr/>
                    <ConsultationFilter />
                </div>
            </CardContent>
        </Card>
    );
};

export default GeneralFilters;