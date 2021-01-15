import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { firstStepInitialValues, validationSchema } from './Steps/FirstStep/data';

import FirstStep from './Steps/FirstStep/FirstStep';
import { FormikStepper, FormikStep } from '../../shared/components/Form/Form';

import { object, string } from 'yup';

export interface FormProps {
    handleBack: () => void;
    handleNext: () => void;
}

const Form: React.FC<FormProps> = ({ handleBack, handleNext }) => {
    return (
        <FormikStepper
            initialValues={{
                ...firstStepInitialValues,
            }}
            onSubmit={() => {}}
            handleBack={handleBack}
            handleNext={handleNext}
        >
            <FirstStep validationSchema={validationSchema} />
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
