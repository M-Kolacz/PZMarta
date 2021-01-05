import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import SectionForm from '../../shared/components/SectionForm/SectionForm';
import { FormikStepper, FormikStep } from '../../shared/components/Form/Form';

import { object, string } from 'yup';

export interface FormProps {
    handleBack: () => void;
    handleNext: () => void;
}

const Form: React.FC<FormProps> = ({ handleBack, handleNext }) => {
    return (
        <FormikStepper
            initialValues={{ policyNumber: '', secondName: '', lastName: '' }}
            onSubmit={() => {}}
            handleBack={handleBack}
            handleNext={handleNext}
        >
            <FormikStep>
                <SectionForm>Data zdarzenia</SectionForm>
            </FormikStep>
            <FormikStep
                validationSchema={object({
                    secondName: string().required('Wymagany'),
                })}
            >
                <Field name='secondName' component={TextField} label='Second name' />
            </FormikStep>
            <FormikStep
                validationSchema={object({
                    lastName: string().required('Wymagany'),
                })}
            >
                <Field name='lastName' component={TextField} label='Last name' />
            </FormikStep>
            <FormikStep
                validationSchema={object({
                    overName: string().required('Wymagany'),
                })}
            >
                <Field name='overName' component={TextField} label='overName' />
            </FormikStep>
        </FormikStepper>
    );
};

export default Form;
