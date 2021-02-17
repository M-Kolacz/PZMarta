import React from 'react';
import { Stepper as MUIStepper, Step, StepLabel } from '@material-ui/core';

import useStyles from './StepperStyles';

export interface StepperProps {
    activeStep: number;
    steps: string[];
}

export const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
    const classes = useStyles();
    return (
        <MUIStepper activeStep={activeStep} alternativeLabel className={classes.Stepper}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </MUIStepper>
    );
};

export default Stepper;
