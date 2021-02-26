import React from 'react';
import { FormikConfig, FormikValues, useFormikContext } from 'formik';

import { fieldsData, IFirstStepForm } from './data';
import {
    conditionalReasonOptions,
    conditionalPersonDeath,
    conditionalPersonalIdentity,
    conditionalPolicyOWner,
    conditionalRegistrationNumber,
    conditionalRegon,
    conditionalVehicleLeasing,
} from './conditionals';
import { policyOwnerOptions, damageOptions, personDeathOptions, ownerOptions } from './options';

import { Event } from '../../../.././../shared/ts/types';

import { FormikStep, IFormikStep } from '../../../../../shared/components/Forms/MultiStepForm';
import SectionForm from '../../../../../shared/components/Forms/SectionForm';
import {
    DatePicker,
    TimePicker,
    RadioGroup,
    Autocomplete,
    TextField,
    CheckboxWithLabel,
} from '../../../../../shared/components/Inputs';

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

const FirstStep: React.FC<IFormikStep> = () => {
    const { values, errors, touched, setFieldValue } = useFormikContext<IFirstStepForm>();

    return (
        <FormikStep>
            <SectionForm>Data zdarzenia</SectionForm>
            <DatePicker {...date} disableFuture />
            <TimePicker {...time} />
            <SectionForm>Przedmiot szkody</SectionForm>
            <RadioGroup
                {...damage}
                controls={damageOptions}
                error={errors.damage}
                touched={touched.damage}
                onClick={(event: Event) => {
                    setFieldValue(reason.name, null);
                }}
            />

            {conditionalPersonDeath(values.damage) && (
                <RadioGroup
                    {...personDeath}
                    error={errors.personDeath}
                    touched={touched.personDeath}
                    controls={personDeathOptions}
                />
            )}

            <SectionForm>Właściciel polisy</SectionForm>
            <RadioGroup
                {...owner}
                controls={ownerOptions}
                error={errors.owner}
                touched={touched.owner}
                onClick={(event: Event) => {
                    setFieldValue(reason.name, null);
                }}
            />
            <SectionForm>Przyczyna powstania szkody</SectionForm>
            <Autocomplete
                {...reason}
                error={errors.reason}
                touched={touched.reason}
                conditionalOptions={() => conditionalReasonOptions(values.damage, values.owner)}
            />
            <SectionForm>Polisa</SectionForm>
            <TextField {...policy} error={errors.policy} touched={touched.policy} />
            <CheckboxWithLabel {...knownPolicy} checkBoxGrid={{ md: 3 }} />

            {conditionalRegistrationNumber(values.damage, values.owner) && (
                <TextField
                    {...registrationNumber}
                    error={errors.registrationNumber}
                    touched={touched.registrationNumber}
                />
            )}

            {conditionalPolicyOWner(values.damage, values.owner) && (
                <RadioGroup
                    {...policyOwner}
                    error={errors.policyOwner}
                    touched={touched.policyOwner}
                    controls={policyOwnerOptions}
                />
            )}

            {conditionalVehicleLeasing(values.damage, values.owner, values.policyOwner) && (
                <RadioGroup
                    {...vehicleLeasing}
                    controls={personDeathOptions}
                    error={errors.vehicleLeasing}
                    touched={touched.vehicleLeasing}
                />
            )}
            {conditionalRegon(values.policyOwner) && (
                <TextField {...regon} error={errors.regon} touched={touched.regon} />
            )}

            {conditionalPersonalIdentity(values.damage, values.owner, values.policyOwner) && (
                <TextField
                    {...personalIdentity}
                    error={errors.personalIdentity}
                    touched={touched.personalIdentity}
                />
            )}
        </FormikStep>
    );
};

export default FirstStep;
