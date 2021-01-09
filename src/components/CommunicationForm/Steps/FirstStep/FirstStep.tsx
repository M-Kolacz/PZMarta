import * as React from 'react';

import { fieldsData } from './data';
import { policyOwnerOptions, damageOptions, personDeathOptions, ownerOptions } from './options';

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
            <RadioGroup {...damage} controls={damageOptions} id={damage.name} xs={12} />
            <RadioGroup
                {...personDeath}
                controls={personDeathOptions}
                id={personDeath.name}
                xs={12}
            />
            <SectionForm>Właściciel polisy</SectionForm>
            <RadioGroup {...owner} controls={ownerOptions} id='owner' xs={12} />
            <SectionForm>Przyczyna powstania szkody</SectionForm>
            <Autocomplete {...reason} options={[{ title: 'Jam' }]} id='situation' xs={12} md={5} />
            <SectionForm>Polisa</SectionForm>
            <TextField {...policy} xs={12} md={5} variant='outlined' id='polisa' />
            <CheckboxWithLabel {...knownPolicy} md={3} />
            <TextField {...registrationNumber} id='1' xs={12} md={5} variant='outlined' />
            <RadioGroup {...policyOwner} controls={policyOwnerOptions} id='owner' xs={12} />
            <RadioGroup {...vehicleLeasing} controls={personDeathOptions} id='owner' xs={12} />
            <TextField {...regon} id='1' xs={12} md={5} variant='outlined' />
            <TextField {...personalIdentity} id='1' xs={12} md={5} variant='outlined' />
        </FormikStep>
    );
};

export default FirstStep;
