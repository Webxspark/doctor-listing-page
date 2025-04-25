import '../App.css'
import {useContext} from "react";
import {GlobalContext} from "@/contexts/globalContext.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Factory, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

function App() {
    const {doctors} = useContext(GlobalContext);
    return (
        <div className={'max-h-[90dvh] overflow-y-auto'}>
            {(doctors && doctors.length > 0) && <>
                {doctors.map((doctor, index) => (
                    <Card key={index} data-testid={'doctor-card'} className={'mb-4'}>
                        <CardContent>
                            <div className={'flex items-start gap-2'}>
                                <img
                                    className={'w-20 h-20 rounded-full'}
                                    src={doctor.photo}
                                    alt={doctor.name}
                                />
                                <div>
                                    <h1 data-testid={'doctor-name'} className={'font-semibold'}>{doctor.name}</h1>
                                    <p data-testid={'doctor-specialty'} className={'font-semibold'}>{
                                        doctor.specialities.map(s => s.name).join(', ')
                                    }</p>
                                    <p>{doctor.doctor_introduction || "MBBS"}</p>
                                    <p data-testid={'doctor-experience'}>{doctor.experience}</p>
                                </div>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <div className={'grid gap-2'}>
                                    <div className={'flex items-center gap-2'}>
                                        <Factory className={'size-4'}/>
                                        {doctor.clinic.name}
                                    </div>
                                    <div className={'flex items-center gap-2'}>
                                        <MapPin className={'size-4'}/>
                                        <a href={'#'}>{doctor.clinic.address.locality}</a>
                                    </div>
                                </div>
                                <h1 data-testid={'doctor-fee'} className={'text-lg font-semibold'}>
                                    {doctor.fees}
                                </h1>
                            </div>
                            <div className={'my-3 flex justify-end'}>
                                <Button variant={'outline'}
                                        className={'outline-blue-500 hover:text-blue-600 text-blue-500'}>
                                    Book Appointment
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </>}
        </div>
    )
}

export default App
