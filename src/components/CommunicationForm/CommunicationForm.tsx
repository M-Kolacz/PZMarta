import React from 'react';
import { Field } from 'formik';

import { TextField } from 'formik-material-ui';

import SectionForm from '../../shared/components/SectionForm/SectionForm';
import { FormikStepper, FormikStep } from '../../shared/components/Form/Form';
import { DatePicker, TimePicker, RadioGroup } from '../../shared/components/Inputs/index';

import { object, string } from 'yup';

export interface FormProps {
    handleBack: () => void;
    handleNext: () => void;
}

const Form: React.FC<FormProps> = ({ handleBack, handleNext }) => {
    return (
        <FormikStepper
            initialValues={{ date: new Date(), time: new Date(), activity: '' }}
            onSubmit={() => {}}
            handleBack={handleBack}
            handleNext={handleNext}
        >
            <FormikStep>
                <SectionForm title='Data zdarzenia' />
                <DatePicker name='date' label='Date' disableFuture xs={12} sm={6} />
                <TimePicker name='time' label='Time' xs={12} sm={6} />
                <SectionForm title='Przedmiot szkody' />
                <RadioGroup />
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
