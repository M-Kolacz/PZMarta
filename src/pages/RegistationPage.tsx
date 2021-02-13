import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

export interface RegistationPageProps {}

const RegistationPage: React.FC<RegistationPageProps> = () => {
    return (
        <>
            <Navigation navigationTitle='Rejestracja' />
            <RegistrationForm />
        </>
    );
};

export default RegistationPage;
