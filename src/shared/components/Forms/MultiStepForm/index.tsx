import React, { useState } from 'react';
import { Formik, Form as FormikForm, FormikConfig, FormikValues } from 'formik';
import { Button, Grid } from '@material-ui/core';

import useStyles from './FormStyles';

export interface FormikStepProps
    extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {}

export interface FormikStepperProps extends FormikConfig<FormikValues> {
    handleBack: () => void;
    handleNext: () => void;
}

export const FormikStep = ({ children }: FormikStepProps) => {
    return <>{children}</>;
};

export const FormikStepper = ({
    children,
    handleBack,
    handleNext,
    ...props
}: FormikStepperProps) => {
    const classes = useStyles();

    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>;

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
