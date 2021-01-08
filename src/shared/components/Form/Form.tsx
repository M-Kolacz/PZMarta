import React, { useState } from 'react';
import { Formik, Form as FormikForm, FormikConfig, FormikValues } from 'formik';
import { Button, Grid } from '@material-ui/core';

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
            <FormikForm autoComplete='off' style={{ width: '96%', margin: '0 auto' }}>
                <Grid container spacing={2}>
                    {currentChild}
                    <Grid item xs={12}>
                        <Button
                            onClick={() => {
                                setStep((s) => s - 1);
                                handleBack();
                            }}
                            disabled={step === 0}
                        >
                            Back
                        </Button>
                        <Button type='submit'>{isLastStep() ? 'Submit' : 'Next'}</Button>
                    </Grid>
                </Grid>
            </FormikForm>
        </Formik>
    );
};
