import React from 'react';
import { FormikConfig, FormikValues, useFormikContext } from 'formik';

import { fieldsData, IThirdStepForm } from './data';

import {
    conditionalContact,
    conditionalCoOwnerForm,
    conditionalCoOwnerTitle,
    conditionalDamageOwnerLeasing,
    conditionalNaturalPersonForm,
    conditionalOnwerForm,
    condtitionalApplicantForm,
    condtitionalCoOwner,
    condtitionalCoOwnerExist,
    condtitionalCoOwnerType,
    condtitionalWorkshopBehalf,
    condtitionalWorkshopForm,
} from './conditionals';

import {
    coOwnerExistOptions,
    coOwnerOptions,
    contactObjectOptions,
    damageOwnerLeasingOptions,
    damageOwnerOptions,
    coOwnerTypeOptions,
} from './options';

import { FormikStep, IFormikStep } from '../../../../../shared/components/Forms/MultiStepForm';
import SectionForm from '../../../../../shared/components/Forms/SectionForm';
import { RadioGroup, TextField, CheckboxWithLabel } from '../../../../../shared/components/Inputs';

const {
    applicantAddressCode,
    applicantCity,
    applicantEmail,
    applicantEmailConfirm,
    applicantLocalNumber,
    applicantName,
    applicantPesel,
    applicantPhone,
    applicantStreet,
    applicantSurname,
    coOwner,
    coOwnerExist,
    coOwnerType,
    coOwnerCompanyAddressCode,
    coOwnerCompanyCity,
    coOwnerCompanyEmail,
    coOwnerCompanyEmailConfirm,
    coOwnerCompanyLocalNumber,
    coOwnerCompanyName,
    coOwnerCompanyPhone,
    coOwnerCompanyRegon,
    coOwnerCompanyStreet,
    coOwnerPersonAddressCode,
    coOwnerPersonCity,
    coOwnerPersonEmail,
    coOwnerPersonEmailConfirm,
    coOwnerPersonLocalNumber,
    coOwnerPersonPesel,
    coOwnerPersonName,
    coOwnerPersonPhone,
    coOwnerPersonStreet,
    coOwnerPersonSurname,
    contactAddressCode,
    contactCity,
    contactEmail,
    contactEmailConfirm,
    contactName,
    contactObject,
    contactPhone,
    contactStreet,
    contactSurname,
    contactLocalNumber,
    damageOwner,
    damageOwnerLeasing,
    ownerAddressCode,
    ownerCity,
    ownerEmail,
    ownerEmailConfirm,
    ownerLocalNumber,
    ownerName,
    ownerPhone,
    ownerStreet,
    ownerSurname,
    ownerPesel,
    workshopAddressCode,
    workshopBehalf,
    workshopCity,
    workshopEmail,
    workshopEmailConfirm,
    workshopLocalNumber,
    workshopName,
    workshopPhone,
    workshopRegon,
    workshopStreet,
} = fieldsData;

const ThirdStep: React.FC<IFormikStep> = () => {
    const { values, errors, touched } = useFormikContext<IThirdStepForm>();
    return (
        <FormikStep>
            <RadioGroup
                {...damageOwner}
                controls={damageOwnerOptions}
                error={errors.damageOwner}
                touched={touched.damageOwner}
            />
            {conditionalDamageOwnerLeasing(values.damageOwner) && (
                <RadioGroup
                    {...damageOwnerLeasing}
                    controls={damageOwnerLeasingOptions}
                    error={errors.damageOwnerLeasing}
                    touched={touched.damageOwnerLeasing}
                />
            )}
            {condtitionalApplicantForm(values.damageOwner) && (
                <>
                    <SectionForm>Dane zgłaszającego</SectionForm>
                    <TextField
                        {...applicantName}
                        error={errors.applicantName}
                        touched={touched.applicantName}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...applicantSurname}
                        error={errors.applicantSurname}
                        touched={touched.applicantSurname}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...applicantPhone}
                        error={errors.applicantPhone}
                        touched={touched.applicantPhone}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                        textFieldGrid={{ xs: 12, md: 10 }}
                    />
                    <TextField
                        {...applicantEmail}
                        error={errors.applicantEmail}
                        touched={touched.applicantEmail}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...applicantEmailConfirm}
                        error={errors.applicantEmailConfirm}
                        touched={touched.applicantEmailConfirm}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...applicantAddressCode}
                        error={errors.applicantAddressCode}
                        touched={touched.applicantAddressCode}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...applicantCity}
                        error={errors.applicantCity}
                        touched={touched.applicantCity}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        hideLabel
                    />
                    <TextField
                        {...applicantStreet}
                        error={errors.applicantStreet}
                        touched={touched.applicantStreet}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...applicantLocalNumber}
                        error={errors.applicantLocalNumber}
                        touched={touched.applicantLocalNumber}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        hideLabel
                    />
                    <TextField
                        {...applicantPesel}
                        error={errors.applicantPesel}
                        touched={touched.applicantPesel}
                        textFieldGrid={{ xs: 12, md: 10 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />

                    {condtitionalWorkshopBehalf(values.damageOwner) && (
                        <CheckboxWithLabel {...workshopBehalf} />
                    )}
                </>
            )}
            {condtitionalWorkshopForm(values.workshopBehalf) && (
                <>
                    <SectionForm>Warsztat</SectionForm>
                    <TextField
                        {...workshopName}
                        error={errors.workshopName}
                        touched={touched.workshopName}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...workshopRegon}
                        error={errors.workshopRegon}
                        touched={touched.workshopRegon}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...workshopPhone}
                        error={errors.workshopPhone}
                        touched={touched.workshopPhone}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                        textFieldGrid={{ xs: 12, md: 10 }}
                    />
                    <TextField
                        {...workshopEmail}
                        error={errors.workshopEmail}
                        touched={touched.workshopEmail}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...workshopEmailConfirm}
                        error={errors.workshopEmailConfirm}
                        touched={touched.workshopEmailConfirm}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...workshopAddressCode}
                        error={errors.workshopAddressCode}
                        touched={touched.workshopAddressCode}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...workshopCity}
                        error={errors.workshopCity}
                        touched={touched.workshopCity}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        hideLabel
                    />
                    <TextField
                        {...workshopStreet}
                        error={errors.workshopStreet}
                        touched={touched.workshopStreet}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...workshopLocalNumber}
                        error={errors.workshopLocalNumber}
                        touched={touched.workshopLocalNumber}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        hideLabel
                    />
                </>
            )}
            {conditionalOnwerForm(values.damageOwner) && (
                <>
                    <SectionForm>Dane właściciela pojazdu poszkodowanego</SectionForm>
                    <TextField
                        {...ownerName}
                        error={errors.ownerName}
                        touched={touched.ownerName}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...ownerSurname}
                        error={errors.ownerSurname}
                        touched={touched.ownerSurname}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...ownerPhone}
                        error={errors.ownerPhone}
                        touched={touched.ownerPhone}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                        textFieldGrid={{ xs: 12, md: 10 }}
                    />
                    <TextField
                        {...ownerEmail}
                        error={errors.ownerEmail}
                        touched={touched.ownerEmail}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...ownerEmailConfirm}
                        error={errors.ownerEmailConfirm}
                        touched={touched.ownerEmailConfirm}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...ownerAddressCode}
                        error={errors.ownerAddressCode}
                        touched={touched.ownerAddressCode}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...ownerCity}
                        error={errors.ownerCity}
                        touched={touched.ownerCity}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        hideLabel
                    />
                    <TextField
                        {...ownerStreet}
                        error={errors.ownerStreet}
                        touched={touched.ownerStreet}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...ownerLocalNumber}
                        error={errors.ownerLocalNumber}
                        touched={touched.ownerLocalNumber}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        hideLabel
                    />
                    <TextField
                        {...ownerPesel}
                        error={errors.ownerPesel}
                        touched={touched.ownerPesel}
                        textFieldGrid={{ xs: 12, md: 10 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                </>
            )}
            {condtitionalCoOwnerExist(values.damageOwner) && (
                <>
                    <SectionForm>Współwłasność</SectionForm>
                    <RadioGroup
                        {...coOwnerExist}
                        controls={coOwnerExistOptions}
                        error={errors.coOwnerExist}
                        touched={touched.coOwnerExist}
                    />
                    {condtitionalCoOwner(values.coOwnerExist) && (
                        <RadioGroup
                            {...coOwner}
                            controls={coOwnerOptions}
                            error={errors.coOwner}
                            touched={touched.coOwner}
                        />
                    )}
                    {condtitionalCoOwnerType(values.damageOwner, values.coOwner) && (
                        <RadioGroup
                            {...coOwnerType}
                            controls={coOwnerTypeOptions}
                            error={errors.coOwner}
                            touched={touched.coOwner}
                        />
                    )}
                </>
            )}
            {conditionalNaturalPersonForm(values.coOwner) && (
                <>
                    <SectionForm>Osoba fizyczna</SectionForm>
                    <TextField
                        {...coOwnerPersonName}
                        error={errors.coOwnerPersonName}
                        touched={touched.coOwnerPersonName}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerPersonSurname}
                        error={errors.coOwnerPersonSurname}
                        touched={touched.coOwnerPersonSurname}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerPersonPhone}
                        error={errors.coOwnerPersonPhone}
                        touched={touched.coOwnerPersonPhone}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                        textFieldGrid={{ xs: 12, md: 10 }}
                    />
                    <TextField
                        {...coOwnerPersonEmail}
                        error={errors.coOwnerPersonEmail}
                        touched={touched.coOwnerPersonEmail}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerPersonEmailConfirm}
                        error={errors.coOwnerPersonEmailConfirm}
                        touched={touched.coOwnerPersonEmailConfirm}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerPersonAddressCode}
                        error={errors.coOwnerPersonAddressCode}
                        touched={touched.coOwnerPersonAddressCode}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerPersonCity}
                        error={errors.coOwnerPersonCity}
                        touched={touched.coOwnerPersonCity}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerPersonStreet}
                        error={errors.coOwnerPersonStreet}
                        touched={touched.coOwnerPersonStreet}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerPersonLocalNumber}
                        error={errors.coOwnerPersonLocalNumber}
                        touched={touched.coOwnerPersonLocalNumber}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerPersonPesel}
                        error={errors.coOwnerPersonPesel}
                        touched={touched.coOwnerPersonPesel}
                        textFieldGrid={{ xs: 12, md: 10 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                </>
            )}
            {conditionalCoOwnerForm(values.coOwner) && (
                <>
                    <SectionForm>{conditionalCoOwnerTitle(values.coOwner)}</SectionForm>
                    <TextField
                        {...coOwnerCompanyName}
                        error={errors.coOwnerCompanyName}
                        touched={touched.coOwnerCompanyName}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerCompanyRegon}
                        error={errors.coOwnerCompanyRegon}
                        touched={touched.coOwnerCompanyRegon}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerCompanyPhone}
                        error={errors.coOwnerCompanyPhone}
                        touched={touched.coOwnerCompanyPhone}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                        textFieldGrid={{ xs: 12, md: 10 }}
                    />
                    <TextField
                        {...coOwnerCompanyEmail}
                        error={errors.coOwnerCompanyEmail}
                        touched={touched.coOwnerCompanyEmail}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerCompanyEmailConfirm}
                        error={errors.coOwnerCompanyEmailConfirm}
                        touched={touched.coOwnerCompanyEmailConfirm}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerCompanyAddressCode}
                        error={errors.coOwnerCompanyAddressCode}
                        touched={touched.coOwnerCompanyAddressCode}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerCompanyCity}
                        error={errors.coOwnerCompanyCity}
                        touched={touched.coOwnerCompanyCity}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        hideLabel
                    />
                    <TextField
                        {...coOwnerCompanyStreet}
                        error={errors.coOwnerCompanyStreet}
                        touched={touched.coOwnerCompanyStreet}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...coOwnerCompanyLocalNumber}
                        error={errors.coOwnerCompanyLocalNumber}
                        touched={touched.coOwnerCompanyLocalNumber}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        hideLabel
                    />
                </>
            )}
            <SectionForm>Z kim powinniśmy się skontaktować</SectionForm>
            <RadioGroup
                {...contactObject}
                controls={contactObjectOptions}
                error={errors.contactObject}
                touched={touched.contactObject}
            />
            {conditionalContact(values.contactObject) && (
                <>
                    <TextField
                        {...contactName}
                        error={errors.contactName}
                        touched={touched.contactName}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...contactSurname}
                        error={errors.contactSurname}
                        touched={touched.contactSurname}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...contactPhone}
                        error={errors.contactPhone}
                        touched={touched.contactPhone}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                        textFieldGrid={{ xs: 12, md: 10 }}
                    />
                    <TextField
                        {...contactEmail}
                        error={errors.contactEmail}
                        touched={touched.contactEmail}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...contactEmailConfirm}
                        error={errors.contactEmailConfirm}
                        touched={touched.contactEmailConfirm}
                        textFieldGrid={{ xs: 12, md: 5 }}
                        hideLabel
                    />
                    <TextField
                        {...contactAddressCode}
                        error={errors.contactAddressCode}
                        touched={touched.contactAddressCode}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...contactCity}
                        error={errors.contactCity}
                        touched={touched.contactCity}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        hideLabel
                    />
                    <TextField
                        {...contactStreet}
                        error={errors.contactStreet}
                        touched={touched.contactStreet}
                        textFieldGrid={{ xs: 12, md: 7 }}
                        labelProps={{ labelGrid: { xs: 12, md: 2 } }}
                    />
                    <TextField
                        {...contactLocalNumber}
                        error={errors.contactLocalNumber}
                        touched={touched.contactLocalNumber}
                        textFieldGrid={{ xs: 12, md: 3 }}
                        hideLabel
                    />
                </>
            )}
        </FormikStep>
    );
};

export default ThirdStep;
