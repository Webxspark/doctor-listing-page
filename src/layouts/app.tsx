import React from 'react';
import AppHeader from "../components/header.tsx";

const AppLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <AppHeader/>
            <div className={'max-w-5xl w-full mx-auto my-5'}>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;