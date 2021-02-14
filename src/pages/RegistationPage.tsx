import React from 'react';

import Navigation from '../components/Navigation';
import RegistrationForm from '../components/RegistrationForm';

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
