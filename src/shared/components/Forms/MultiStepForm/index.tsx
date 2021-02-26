import React, { useState } from 'react';
import { Formik, Form as FormikForm, FormikConfig, FormikValues } from 'formik';
import { Button, Grid } from '@material-ui/core';

import useStyles from './FormStyles';

export interface IFormikStepProps
    extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {}

export interface IFormikStepperProps extends FormikConfig<FormikValues> {
    handleBack: () => void;
    handleNext: () => void;
}

export interface IFormikStep extends Pick<FormikConfig<FormikValues>, 'validationSchema'> {}

export const FormikStep = ({ children }: IFormikStepProps) => {
    return <>{children}</>;
};

export const FormikStepper = ({
    children,
    handleBack,
    handleNext,
    ...props
}: IFormikStepperProps) => {
    const classes = useStyles();

    const childrenArray = React.Children.toArray(
        children,
    ) as React.ReactElement<IFormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step] as React.ReactElement<IFormikStepProps>;

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    };

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                } else {
                    setStep((s) => s + 1);
                    handleNext();
                }
            }}
        >
            <FormikForm autoComplete='off' className={classes.FormikForm}>
                <Grid container spacing={2}>
                    {currentChild}
                    <Grid item xs={12} className={classes.FormFooter}>
                        <Button
                            onClick={() => {
                                setStep((s) => s - 1);
                                handleBack();
                            }}
                            disabled={step === 0}
                            variant='contained'
                            color='secondary'
                            className={classes.FormButton}
                        >
                            Back
                        </Button>
                        <Button type='submit' variant='contained' color='secondary'>
                            {isLastStep() ? 'Submit' : 'Next'}
                        </Button>
                    </Grid>
                </Grid>
            </FormikForm>
        </Formik>
    );
};
