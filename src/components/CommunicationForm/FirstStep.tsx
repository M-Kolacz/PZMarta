import * as React from 'react';

import { subjectDamage, policyOwner } from '../../shared/SSOT/forms/options';

import { FormikStep } from '../../shared/components/Form/Form';
import SectionForm from '../../shared/components/SectionForm/SectionForm';
import { DatePicker, TimePicker, RadioGroup, Autocomplete } from '../../shared/components/Inputs';

export interface FirstStepProps {}

const FirstStep: React.FC<FirstStepProps> = () => {
    return (
        <FormikStep>
            <SectionForm>Data zdarzenia</SectionForm>
            <DatePicker name='date' label='Date' disableFuture xs={12} sm={6} />
            <TimePicker name='time' label='Time' xs={12} sm={6} />

            <SectionForm>Przedmiot szkody</SectionForm>
            <RadioGroup
                name='activity'
                id='activity'
                labelTitle='Czego dotyczy zgłoszenie ?'
                controls={subjectDamage}
                xs={12}
            />
            <SectionForm>Właściciel polisy</SectionForm>
            <RadioGroup
                name='owner'
                id='owner'
                labelTitle='Z czyjego ubezpieczenia zgłaszasz szkodę?'
                controls={policyOwner}
                xs={12}
            />

            <SectionForm>Przyczyna powstania szkody</SectionForm>
            <Autocomplete
                labelTitle='Wybierz przyczynę najlepiej pasującą do zdarzenia'
                name='cos'
                options={[{ title: 'Jam' }]}
                id='situation'
                xs={12}
                md={6}
            />
            <SectionForm>Polisa</SectionForm>
        </FormikStep>
    );
};

export default FirstStep;
