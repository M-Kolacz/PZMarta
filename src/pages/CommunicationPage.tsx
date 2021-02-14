import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';

import Stepper from '../shared/components/Stepper';
import Navigation from '../components/Navigation';
import CommunicationForm from '../components/CommunicationForm';

export interface CommunicationPageProps {}

const steps = ['Dane podstawowe', 'Dane dodatkowe', 'Dokumenty', 'Podsumowanie'];

const CommunicationPage: React.FC<CommunicationPageProps> = () => {
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

export default CommunicationPage;
