import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronUp} from "lucide-react";
import {useState} from "react";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Label} from "@/components/ui/label.tsx";
import {cn} from "@/lib/utils.ts";

const SortFilter = () => {
    const [chevronOpen, setChevronOpen] = useState(true);
    return (
        <Card data-testid={'filter-header-sort'} className={'gap-1'}>
            <CardHeader>
                <div className={'flex items-center justify-between text-gray-600/90'}>
                    <h1 className={''}>Sort by</h1>
                    <Button
                        variant={'ghost'}
                        size={"icon"}
                        className={'rounded-lg'}
                        onClick={() => setChevronOpen(!chevronOpen)}
                    >
                        <ChevronUp
                            className={cn(
                                'transition-transform duration-300 ease-in-out',
                                chevronOpen ? 'rotate-180' : 'rotate-0'
                            )}
                        />
                    </Button>
                </div>
            </CardHeader>
            {
                chevronOpen && (<CardContent className={'text-gray-800'}>
                    <RadioGroup>
                        <div className={'flex items-center gap-2'}>
                            <RadioGroupItem
                                data-testid={'sort-fees'}
                                value={'sort-fees'}
                                id={'sort-fees'}
                            />
                            <Label className={'text-base'} htmlFor={'sort-fees'}>
                                Price: Low-High
                            </Label>
                        </div>
                        <div className={'flex items-center gap-2'}>
                            <RadioGroupItem
                                data-testid={'sort-experience'}
                                value={'sort-experience'}
                                id={'sort-experience'}
                            />
                            <Label className={'text-base'} htmlFor={'sort-experience'}>
                                Experience: Most Experience first
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>)
            }
        </Card>
    );
};

export default SortFilter;