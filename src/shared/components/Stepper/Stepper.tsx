import React from 'react';
import { Stepper as MUIStepper, Step, StepLabel } from '@material-ui/core';

export interface StepperProps {
    activeStep: number;
    steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
    return (
        <MUIStepper activeStep={activeStep} alternativeLabel style={{ width: '100%' }}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </MUIStepper>
    );
};

export default Stepper;
