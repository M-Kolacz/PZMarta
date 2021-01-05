import React, { useState } from 'react';

import Stepper from '../shared/components/Stepper/Stepper';
import Navigation from '../components/Navigation/Navigation';
import CommunicationForm from '../components/CommunicationForm/CommunicationForm';

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
            <Stepper activeStep={activeStep} steps={steps} />
            <CommunicationForm handleNext={handleNext} handleBack={handleBack} />
        </>
    );
};

export default CommunicationPage;
