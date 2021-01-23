import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { firstStepInitialValues, firstStepValidationSchema } from './Steps/FirstStep/data';
import { secondStepInitialValues, secondStepValidationSchema } from './Steps/SecondStep/data';

import FirstStep from './Steps/FirstStep/FirstStep';
import SecondStep from './Steps/SecondStep/SecondStep';
import ThirdStep from './Steps/ThirdStep/ThirdStep';
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
                ...secondStepInitialValues,
            }}
            onSubmit={() => {}}
            handleBack={handleBack}
            handleNext={handleNext}
        >
            <FirstStep />
            <SecondStep />
            <ThirdStep />
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
