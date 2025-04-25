import {GlobalContextProvider} from "@/contexts/globalContext.tsx";
import AppLayout from "@/layouts/app.tsx";

const Index = () => {
    return (
        <GlobalContextProvider>
            <AppLayout/>
        </GlobalContextProvider>
    );
};

export default Index;