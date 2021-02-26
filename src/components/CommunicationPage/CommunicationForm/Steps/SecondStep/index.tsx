import React from 'react';
import { FormikConfig, FormikValues, useFormikContext } from 'formik';

import { fieldsData, ISecondStepForm } from './data';

import {
    injuredPersonOptions,
    parkedCarOptions,
    perpetratorStatementOptions,
    policeDataOptions,
    publicServicesOptions,
} from './options';
import {
    conditionalCountry,
    conditionalPoliceData,
    conditionalInjuredPerson,
    conditionalPoliceUnitCity,
} from './conditionals';

import { FormikStep, IFormikStep } from '../../../../../shared/components/Forms/MultiStepForm';
import SectionForm from '../../../../../shared/components/Forms/SectionForm';
import { RadioGroup, TextField, CheckboxWithLabel } from '../../../../../shared/components/Inputs';

const {
    aboard,
    apartmentNumber,
    city,
    country,
    countryCity,
    courseEvent,
    injuredPerson,
    parkedCar,
    perpetratorStatement,
    policeCity,
    policeData,
    policeUnit,
    publicServices,
    street,
} = fieldsData;

const SecondStep: React.FC<IFormikStep> = () => {
    const { values, errors, touched } = useFormikContext<ISecondStepForm>();

    return (
        <FormikStep>
            <SectionForm>Miejsce zdarzenia</SectionForm>
            <TextField
                {...city}
                error={errors.city}
                disabled={values.aboard}
                touched={touched.city}
            />
            <TextField
                {...street}
                error={errors.street}
                disabled={values.aboard}
                touched={touched.street}
            />
            <TextField
                {...apartmentNumber}
                error={errors.apartmentNumber}
                disabled={values.aboard}
                touched={touched.apartmentNumber}
            />
            <CheckboxWithLabel {...aboard} checkBoxGrid={{ xs: 12 }} />

            {conditionalCountry(values.aboard) && (
                <>
                    <TextField {...country} error={errors.country} touched={touched.country} />
                    <TextField
                        {...countryCity}
                        error={errors.countryCity}
                        touched={touched.countryCity}
                    />
                </>
            )}

            <SectionForm>Opis zdarzenia</SectionForm>
            <RadioGroup
                {...parkedCar}
                controls={parkedCarOptions}
                error={errors.parkedCar}
                touched={touched.parkedCar}
            />

            {conditionalInjuredPerson(values.parkedCar) && (
                <RadioGroup
                    {...injuredPerson}
                    controls={injuredPersonOptions}
                    error={errors.injuredPerson}
                    touched={touched.injuredPerson}
                />
            )}

            <TextField
                {...courseEvent}
                error={errors.courseEvent}
                multiline
                rows={4}
                touched={touched.courseEvent}
            />
            <RadioGroup
                {...perpetratorStatement}
                controls={perpetratorStatementOptions}
                error={errors.perpetratorStatement}
                touched={touched.perpetratorStatement}
            />
            <RadioGroup
                {...publicServices}
                controls={publicServicesOptions}
                error={errors.publicServices}
                touched={touched.publicServices}
            />
            {conditionalPoliceData(values.publicServices) && (
                <RadioGroup
                    {...policeData}
                    controls={policeDataOptions}
                    error={errors.policeData}
                    touched={touched.policeData}
                />
            )}
            {conditionalPoliceUnitCity(values.policeData) && (
                <>
                    <TextField
                        {...policeUnit}
                        error={errors.policeUnit}
                        touched={touched.policeUnit}
                    />
                    <TextField
                        {...policeCity}
                        error={errors.policeCity}
                        touched={touched.policeCity}
                    />
                </>
            )}
        </FormikStep>
    );
};

export default SecondStep;
