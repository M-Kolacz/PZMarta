import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';

import CommunicationForm from './CommunicationForm';
import { Stepper, Navigation } from '../../shared/components/UIElements';

export interface CommunicationPageProps {}

const steps = ['Dane podstawowe', 'Dane dodatkowe', 'Dokumenty', 'Podsumowanie'];

export const CommunicationPage: React.FC<CommunicationPageProps> = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <Navigation navigationTitle='Formularz zgłoszeniowy' />
            <Hidden xsDown>
                <Stepper activeStep={activeStep} steps={steps} />
            </Hidden>
            <CommunicationForm handleNext={handleNext} handleBack={handleBack} />
        </>
    );
};
