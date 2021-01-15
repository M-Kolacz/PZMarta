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
    Autocomplete,
    AutocompleteDynamic,
    TextField,
    CheckboxWithLabel,
} from '../../../../shared/components/Inputs';
import { SelectField } from 'material-ui';

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

    console.log(errors);

    return (
        <FormikStep>
            <SectionForm>Data zdarzenia</SectionForm>
            <DatePicker {...date} disableFuture xs={12} sm={6} />
            <TimePicker {...time} xs={12} sm={6} />
            <SectionForm>Przedmiot szkody</SectionForm>
            <RadioGroup
                {...damage}
                controls={damageOptions}
                error={errors.damage}
                touched={touched.damage}
                id={damage.name}
                xs={12}
                onClick={(event: Event) => {
                    setFieldValue(reason.name, {});
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
                    id={personDeath.name}
                    xs={12}
                />
            )}

            <SectionForm>Właściciel polisy</SectionForm>
            <RadioGroup
                {...owner}
                controls={ownerOptions}
                error={errors.owner}
                touched={touched.owner}
                id='owner'
                xs={12}
                onClick={(event: Event) => {
                    setFieldValue(reason.name, {});
                    setOwnerPersonal(event);
                }}
            />
            <SectionForm>Przyczyna powstania szkody</SectionForm>
            <AutocompleteDynamic
                {...reason}
                id='situation'
                xs={12}
                md={5}
                conditionalOptions={() => conditionalReasonOptions(values.damage, values.owner)}
            />
            <SectionForm>Polisa</SectionForm>
            <TextField
                {...policy}
                xs={12}
                md={5}
                variant='outlined'
                id='polisa'
                disabled={values.knownPolicy}
            />
            <CheckboxWithLabel {...knownPolicy} md={3} />

            {ownerPersonal && damageCar && (
                <TextField {...registrationNumber} id='1' xs={12} md={5} variant='outlined' />
            )}

            {((damageAssets && ownerPersonal) || (ownerPersonal && damageCar)) && (
                <RadioGroup
                    {...policyOwner}
                    error={errors.policyOwner}
                    touched={touched.policyOwner}
                    controls={policyOwnerOptions}
                    id='owner'
                    xs={12}
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
                    id='owner'
                    xs={12}
                />
            )}
            {policyComapny && <TextField {...regon} id='1' xs={12} md={5} variant='outlined' />}

            {((damagePerson && ownerPersonal) || policyNaturalPerson) && (
                <TextField {...personalIdentity} id='1' xs={12} md={5} variant='outlined' />
            )}
        </FormikStep>
    );
};

export default FirstStep;
