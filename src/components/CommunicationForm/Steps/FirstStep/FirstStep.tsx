import * as React from 'react';

import { fieldsData } from './data';
import { policyOwnerOptions, damageOptions } from './options';

import { FormikStep } from '../../../../shared/components/Form/Form';
import SectionForm from '../../../../shared/components/SectionForm/SectionForm';
import {
    DatePicker,
    TimePicker,
    RadioGroup,
    Autocomplete,
    TextField,
    CheckboxWithLabel,
} from '../../../../shared/components/Inputs';

export interface FirstStepProps {}

const {
    date,
    time,
    damage,
    knownPolicy,
    owner,
    personDeath,
    personalIdentity,
    policy,
    policyOwner,
    reason,
    registrationNumber,
    regon,
    vehicleLeasing,
} = fieldsData;

const FirstStep: React.FC<FirstStepProps> = () => {
    return (
        <FormikStep>
            <SectionForm>Data zdarzenia</SectionForm>
            <DatePicker {...date} disableFuture xs={12} sm={6} />
            <TimePicker {...time} xs={12} sm={6} />
            <SectionForm>Przedmiot szkody</SectionForm>
            <RadioGroup {...damage} controls={damageOptions} id='activity' xs={12} />
            <SectionForm>Właściciel polisy</SectionForm>
            <RadioGroup {...owner} controls={policyOwnerOptions} id='owner' xs={12} />
            <SectionForm>Przyczyna powstania szkody</SectionForm>
            <Autocomplete {...reason} options={[{ title: 'Jam' }]} id='situation' xs={12} md={5} />
            <SectionForm>Polisa</SectionForm>
            <TextField {...policy} xs={12} md={5} variant='outlined' id='polisa' />
            <CheckboxWithLabel name='cos tam' Label={{ label: 'Działa' }} md={3} />;
        </FormikStep>
    );
};

export default FirstStep;
