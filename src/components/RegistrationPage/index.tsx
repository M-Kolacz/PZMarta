import React from 'react';

import RegistrationForm from './RegistrationForm';
import { Navigation } from '../../shared/components/UIElements';

export interface RegistationPageProps {}

export const RegistrationPage: React.FC<RegistationPageProps> = () => {
    return (
        <>
            <Navigation navigationTitle='Rejestracja' />
            <RegistrationForm />
        </>
    );
};
