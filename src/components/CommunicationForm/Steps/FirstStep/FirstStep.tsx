import React from 'react';
import { FormikConfig, FormikValues, useFormikContext } from 'formik';

import { fieldsData, FirstStepForm } from './data';
import { conditionalReasonOptions } from './conditionals';
import { useShowField } from '../../../../shared/hooks/useShowField';
import { policyOwnerOptions, damageOptions, personDeathOptions, ownerOptions } from './options';

import { Event } from '../../../../shared/types/event';

import { FormikStep } from '../../../../shared/components/Form/Form';
import SectionForm from '../../../../shared/components/SectionForm/SectionForm';
import {
    DatePicker,
    TimePicker,
    RadioGroup,
    AutocompleteDynamic,
    TextField,
    CheckboxWithLabel,
} from '../../../../shared/components/Inputs';

export interface FirstStepProps extends Pick<FormikConfig<FormikValues>, 'validationSchema'> {}

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
    const { values, errors, touched, setFieldValue } = useFormikContext<FirstStepForm>();

    const [damagePerson, setDamagePerson] = useShowField('person');
    const [damageAssets, setDamageAssets] = useShowField('assets');
    const [damageCar, setDamageCar] = useShowField('car');

    const [ownerPersonal, setOwnerPersonal] = useShowField('personal');

    const [policyNaturalPerson, setPolicyNaturalPerson] = useShowField('naturalPerson');
    const [policyComapny, setPolicyCompany] = useShowField('company');

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
                    setDamagePerson(event);
                    setDamageCar(event);
                    setDamageAssets(event);
                }}
            />

            {damagePerson && (
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
                    setOwnerPersonal(event);
                }}
            />
            <SectionForm>Przyczyna powstania szkody</SectionForm>
            <AutocompleteDynamic
                {...reason}
                error={errors.reason}
                touched={touched.reason}
                conditionalOptions={() => conditionalReasonOptions(values.damage, values.owner)}
            />
            <SectionForm>Polisa</SectionForm>
            <TextField {...policy} disabled={values.knownPolicy} error={errors.policy} />
            <CheckboxWithLabel {...knownPolicy} md={3} />

            {ownerPersonal && damageCar && (
                <TextField {...registrationNumber} error={errors.registrationNumber} />
            )}

            {((damageAssets && ownerPersonal) || (ownerPersonal && damageCar)) && (
                <RadioGroup
                    {...policyOwner}
                    error={errors.policyOwner}
                    touched={touched.policyOwner}
                    controls={policyOwnerOptions}
                    onClick={(event: Event) => {
                        setPolicyNaturalPerson(event);
                        setPolicyCompany(event);
                    }}
                />
            )}

            {!damageAssets && policyComapny && (
                <RadioGroup
                    {...vehicleLeasing}
                    controls={personDeathOptions}
                    error={errors.vehicleLeasing}
                    touched={touched.vehicleLeasing}
                />
            )}
            {policyComapny && <TextField {...regon} error={errors.regon} />}

            {((damagePerson && ownerPersonal) || policyNaturalPerson) && (
                <TextField {...personalIdentity} error={errors.personalIdentity} />
            )}
        </FormikStep>
    );
};

export default FirstStep;
