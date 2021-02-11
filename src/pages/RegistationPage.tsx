import React from 'react';

import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Navigation from '../components/Navigation/Navigation';

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
