import * as Yup from 'yup';

import { stringValidation } from '../../../../../shared/SSOT/schemas/yup';

import {
    DamageOwner,
    YesNo,
    CoOwner,
    ContactObject,
    conditionalCoOwnerForm,
    conditionalContact,
    conditionalDamageOwnerLeasing,
    conditionalNaturalPersonForm,
    conditionalOnwerForm,
    condtitionalApplicantForm,
    condtitionalCoOwner,
    condtitionalCoOwnerExist,
    condtitionalCoOwnerType,
    condtitionalWorkshopForm,
} from './conditionals';

const DAMAGE_OWNER = 'damageOwner';
const DAMAGE_OWNER_LEASING = 'damageOwnerLeasing';

const APPLICANT_NAME = 'applicantName';
const APPLICANT_SURNAME = 'applicantSurname';
const APPLICANT_PHONE = 'applicantPhone';
const APPLICANT_EMAIL = 'applicantEmail';
const APPLICANT_EMAIL_CONFIRM = 'applicantEmailConfirm';
const APPLICANT_ADDRESS_CODE = 'applicantAddressCode';
const APPLICANT_CITY = 'applicantCity';
const APPLICANT_STREET = 'applicantStreet';
const APPLICANT_LOCAL_NUMBER = 'applicantLocalNumber';
const APPLICANT_PESEL = 'applicantPesel';

const WORKSHOP_BEHALF = 'workshopBehalf';

const WORKSHOP_NAME = 'workshopName';
const WORKSHOP_REGON = 'workshopRegon';
const WORKSHOP_PHONE = 'workshopPhone';
const WORKSHOP_EMAIL = 'workshopEmail';
const WORKSHOP_EMAIL_CONFIRM = 'workshopEmailConfirm';
const WORKSHOP_ADDRESS_CODE = 'workshopAddressCode';
const WORKSHOP_CITY = 'workshopCity';
const WORKSHOP_STREET = 'workshopStreet';
const WORKSHOP_LOCAL_NUMBER = 'workshopLocalNumber';

const CO_OWNER_EXIST = 'coOwnerExist';
const CO_OWNER = 'coOwner';
const CO_OWNER_TYPE = 'coOwnerType';

const CO_OWNER_PERSON_NAME = 'coOwnerPersonName';
const CO_OWNER_PERSON_SURNAME = 'coOwnerPersonSurname';
const CO_OWNER_PERSON_PHONE = 'coOwnerPersonPhone';
const CO_OWNER_PERSON_EMAIL = 'coOwnerPersonEmail';
const CO_OWNER_PERSON_EMAIL_CONFIRM = 'coOwnerPersonEmailConfirm';
const CO_OWNER_PERSON_CODE = 'coOwnerPersonAddressCode';
const CO_OWNER_PERSON_CITY = 'coOwnerPersonCity';
const CO_OWNER_PERSON_STREET = 'coOwnerPersonStreet';
const CO_OWNER_PERSON_LOCAL_NUMBER = 'coOwnerPersonLocalNumber';
const CO_OWNER_PERSON_PESEL = 'coOwnerPersonPesel';

const CO_OWNER_COMPANY_NAME = 'coOwnerCompanyName';
const CO_OWNER_COMPANY_REGON = 'coOwnerCompanyRegon';
const CO_OWNER_COMPANY_PHONE = 'coOwnerCompanyPhone';
const CO_OWNER_COMPANY_EMAIL = 'coOwnerCompanyEmail';
const CO_OWNER_COMPANY_EMAIL_CONFIRM = 'coOwnerCompanyEmailConfirm';
const CO_OWNER_COMPANY_CODE = 'coOwnerCompanyAddressCode';
const CO_OWNER_COMPANY_CITY = 'coOwnerCompanyCity';
const CO_OWNER_COMPANY_STREET = 'coOwnerCompanyStreet';
const CO_OWNER_COMPANY_LOCAL_NUMBER = 'coOwnerCompanyLocalNumber';

const OWNER_NAME = 'ownerName';
const OWNER_SURNAME = 'ownerSurname';
const OWNER_PHONE = 'ownerPhone';
const OWNER_EMAIL = 'ownerEmail';
const OWNER_EMAIL_CONFIRM = 'ownerEmailConfirm';
const OWNER_ADDRESS_CODE = 'ownerAddressCode';
const OWNER_CITY = 'ownerCity';
const OWNER_STREET = 'ownerStreet';
const OWNER_LOCAL_NUMBER = 'ownerLocalNumber';

const CONTACT_OBJECT = 'contactObject';

const CONTACT_NAME = 'contactName';
const CONTACT_SURNAME = 'contactSurname';
const CONTACT_PHONE = 'contactPhone';
const CONTACT_EMAIL = 'contactEmail';
const CONTACT_EMAIL_CONFIRM = 'contactEmailConfirm';
const CONTACT_ADDRESS_CODE = 'contactAddressCode';
const CONTACT_CITY = 'contactCity';
const CONTACT_STREET = 'contactStreet';
const CONTACT_LOCAL_NUMBER = 'contactLocalNumber';
const OWNER_PESEL = 'ownerPesel';

export const thirdStepInitialValues = {
    [DAMAGE_OWNER]: '',
    [DAMAGE_OWNER_LEASING]: '',
    [APPLICANT_NAME]: '',
    [APPLICANT_SURNAME]: '',
    [APPLICANT_PHONE]: '',
    [APPLICANT_EMAIL]: '',
    [APPLICANT_EMAIL_CONFIRM]: '',
    [APPLICANT_ADDRESS_CODE]: '',
    [APPLICANT_CITY]: '',
    [APPLICANT_STREET]: '',
    [APPLICANT_LOCAL_NUMBER]: '',
    [APPLICANT_PESEL]: '',

    [WORKSHOP_BEHALF]: false,

    [WORKSHOP_NAME]: '',
    [WORKSHOP_REGON]: '',
    [WORKSHOP_PHONE]: '',
    [WORKSHOP_EMAIL]: '',
    [WORKSHOP_EMAIL_CONFIRM]: '',
    [WORKSHOP_ADDRESS_CODE]: '',
    [WORKSHOP_CITY]: '',
    [WORKSHOP_STREET]: '',
    [WORKSHOP_LOCAL_NUMBER]: '',

    [CO_OWNER_EXIST]: '',
    [CO_OWNER]: '',
    [CO_OWNER_TYPE]: '',

    [CO_OWNER_PERSON_NAME]: '',
    [CO_OWNER_PERSON_SURNAME]: '',
    [CO_OWNER_PERSON_PHONE]: '',
    [CO_OWNER_PERSON_EMAIL]: '',
    [CO_OWNER_PERSON_EMAIL_CONFIRM]: '',
    [CO_OWNER_PERSON_CODE]: '',
    [CO_OWNER_PERSON_CITY]: '',
    [CO_OWNER_PERSON_STREET]: '',
    [CO_OWNER_PERSON_LOCAL_NUMBER]: '',
    [CO_OWNER_PERSON_PESEL]: '',

    [CO_OWNER_COMPANY_NAME]: '',
    [CO_OWNER_COMPANY_REGON]: '',
    [CO_OWNER_COMPANY_PHONE]: '',
    [CO_OWNER_COMPANY_EMAIL]: '',
    [CO_OWNER_COMPANY_EMAIL_CONFIRM]: '',
    [CO_OWNER_COMPANY_CODE]: '',
    [CO_OWNER_COMPANY_CITY]: '',
    [CO_OWNER_COMPANY_STREET]: '',
    [CO_OWNER_COMPANY_LOCAL_NUMBER]: '',

    [OWNER_NAME]: '',
    [OWNER_SURNAME]: '',
    [OWNER_PHONE]: '',
    [OWNER_EMAIL]: '',
    [OWNER_EMAIL_CONFIRM]: '',
    [OWNER_ADDRESS_CODE]: '',
    [OWNER_CITY]: '',
    [OWNER_STREET]: '',
    [OWNER_LOCAL_NUMBER]: '',
    [OWNER_PESEL]: '',

    [CONTACT_OBJECT]: '',

    [CONTACT_NAME]: '',
    [CONTACT_SURNAME]: '',
    [CONTACT_PHONE]: '',
    [CONTACT_EMAIL]: '',
    [CONTACT_EMAIL_CONFIRM]: '',
    [CONTACT_ADDRESS_CODE]: '',
    [CONTACT_CITY]: '',
    [CONTACT_STREET]: '',
    [CONTACT_LOCAL_NUMBER]: '',
};

export interface IThirdStepForm {
    [DAMAGE_OWNER]: DamageOwner;
    [DAMAGE_OWNER_LEASING]: string;
    [APPLICANT_NAME]: string;
    [APPLICANT_SURNAME]: string;
    [APPLICANT_PHONE]: string;
    [APPLICANT_EMAIL]: string;
    [APPLICANT_EMAIL_CONFIRM]: string;
    [APPLICANT_ADDRESS_CODE]: string;
    [APPLICANT_CITY]: string;
    [APPLICANT_STREET]: string;
    [APPLICANT_LOCAL_NUMBER]: string;
    [APPLICANT_PESEL]: string;

    [WORKSHOP_BEHALF]: boolean;

    [WORKSHOP_NAME]: string;
    [WORKSHOP_REGON]: string;
    [WORKSHOP_PHONE]: string;
    [WORKSHOP_EMAIL]: string;
    [WORKSHOP_EMAIL_CONFIRM]: string;
    [WORKSHOP_ADDRESS_CODE]: string;
    [WORKSHOP_CITY]: string;
    [WORKSHOP_STREET]: string;
    [WORKSHOP_LOCAL_NUMBER]: string;

    [CO_OWNER_EXIST]: YesNo;
    [CO_OWNER]: CoOwner;
    [CO_OWNER_TYPE]: string;

    [CO_OWNER_PERSON_NAME]: string;
    [CO_OWNER_PERSON_SURNAME]: string;
    [CO_OWNER_PERSON_PHONE]: string;
    [CO_OWNER_PERSON_EMAIL]: string;
    [CO_OWNER_PERSON_EMAIL_CONFIRM]: string;
    [CO_OWNER_PERSON_CODE]: string;
    [CO_OWNER_PERSON_CITY]: string;
    [CO_OWNER_PERSON_STREET]: string;
    [CO_OWNER_PERSON_LOCAL_NUMBER]: string;
    [CO_OWNER_PERSON_PESEL]: string;

    [CO_OWNER_COMPANY_NAME]: string;
    [CO_OWNER_COMPANY_REGON]: string;
    [CO_OWNER_COMPANY_PHONE]: string;
    [CO_OWNER_COMPANY_EMAIL]: string;
    [CO_OWNER_COMPANY_EMAIL_CONFIRM]: string;
    [CO_OWNER_COMPANY_CODE]: string;
    [CO_OWNER_COMPANY_CITY]: string;
    [CO_OWNER_COMPANY_STREET]: string;
    [CO_OWNER_COMPANY_LOCAL_NUMBER]: string;

    [OWNER_NAME]: string;
    [OWNER_SURNAME]: string;
    [OWNER_PHONE]: string;
    [OWNER_EMAIL]: string;
    [OWNER_EMAIL_CONFIRM]: string;
    [OWNER_ADDRESS_CODE]: string;
    [OWNER_CITY]: string;
    [OWNER_STREET]: string;
    [OWNER_LOCAL_NUMBER]: string;
    [OWNER_PESEL]: string;

    [CONTACT_OBJECT]: ContactObject;

    [CONTACT_NAME]: string;
    [CONTACT_SURNAME]: string;
    [CONTACT_PHONE]: string;
    [CONTACT_EMAIL]: string;
    [CONTACT_EMAIL_CONFIRM]: string;
    [CONTACT_ADDRESS_CODE]: string;
    [CONTACT_CITY]: string;
    [CONTACT_STREET]: string;
    [CONTACT_LOCAL_NUMBER]: string;
}

export const fieldsData = {
    [DAMAGE_OWNER]: {
        name: DAMAGE_OWNER,
        label: 'Właścicielem pojazdu poszkodowanego jest:',
        id: DAMAGE_OWNER,
    },
    [DAMAGE_OWNER_LEASING]: {
        name: DAMAGE_OWNER_LEASING,
        label: 'Czy pojazd poszkodowanego jest przedmiotem leasingu?',
        id: DAMAGE_OWNER_LEASING,
    },
    [APPLICANT_NAME]: {
        name: APPLICANT_NAME,
        label: 'Imię i nazwisko',
        id: APPLICANT_NAME,
        placeholder: 'Imię',
    },
    [APPLICANT_SURNAME]: {
        name: APPLICANT_SURNAME,
        label: 'EXAMPLE',
        id: APPLICANT_SURNAME,
        placeholder: 'Nazwisko',
    },
    [APPLICANT_PHONE]: {
        name: APPLICANT_PHONE,
        label: 'Telefon komórkowy',
        id: APPLICANT_PHONE,
    },
    [APPLICANT_EMAIL]: {
        name: APPLICANT_EMAIL,
        label: 'Adres email',
        id: APPLICANT_EMAIL,
        placeholder: 'Adres email',
    },
    [APPLICANT_EMAIL_CONFIRM]: {
        name: APPLICANT_EMAIL_CONFIRM,
        label: 'EXAMPLE',
        id: APPLICANT_EMAIL_CONFIRM,
        placeholder: 'Powtórz adres email',
    },
    [APPLICANT_ADDRESS_CODE]: {
        name: APPLICANT_ADDRESS_CODE,
        label: 'Kod pocztowy i miejscowość',
        id: APPLICANT_ADDRESS_CODE,
    },
    [APPLICANT_CITY]: {
        name: APPLICANT_CITY,
        label: 'EXAMPLE',
        id: APPLICANT_CITY,
        placeholder: 'Miejscowość',
    },
    [APPLICANT_STREET]: {
        name: APPLICANT_STREET,
        label: 'Ulica numer domu ',
        id: APPLICANT_STREET,
        placeholder: 'Ulica',
    },
    [APPLICANT_LOCAL_NUMBER]: {
        name: APPLICANT_LOCAL_NUMBER,
        label: 'EXAMPLE',
        id: APPLICANT_LOCAL_NUMBER,
        placeholder: 'Numer domu',
    },
    [APPLICANT_PESEL]: {
        name: APPLICANT_PESEL,
        label: 'PESEL',
        id: APPLICANT_PESEL,
        placeholder: 'Pesel',
    },

    [WORKSHOP_BEHALF]: {
        name: WORKSHOP_BEHALF,
        label: 'Zgłaszam szkodę w imieniu warsztatu',
        id: WORKSHOP_BEHALF,
    },

    [WORKSHOP_NAME]: {
        name: WORKSHOP_NAME,
        label: 'Nazwa firmy i REGON',
        id: WORKSHOP_NAME,
        placeholder: 'Nazwa firmy',
    },
    [WORKSHOP_REGON]: {
        name: WORKSHOP_REGON,
        label: 'EXAMPLE',
        id: WORKSHOP_REGON,
        placeholder: 'REGON',
    },
    [WORKSHOP_PHONE]: { name: WORKSHOP_PHONE, label: 'Telefon komórkowy', id: WORKSHOP_PHONE },
    [WORKSHOP_EMAIL]: {
        name: WORKSHOP_EMAIL,
        label: 'Adres email',
        id: WORKSHOP_EMAIL,
        placeholder: 'Adres email',
    },
    [WORKSHOP_EMAIL_CONFIRM]: {
        name: WORKSHOP_EMAIL_CONFIRM,
        label: 'EXAMPLE',
        id: WORKSHOP_EMAIL_CONFIRM,
        placeholder: 'Powtórz adres email',
    },
    [WORKSHOP_ADDRESS_CODE]: {
        name: WORKSHOP_ADDRESS_CODE,
        label: 'Kod pocztowy i miejscowość',
        id: WORKSHOP_ADDRESS_CODE,
    },
    [WORKSHOP_CITY]: {
        name: WORKSHOP_CITY,
        label: 'EXAMPLE',
        id: WORKSHOP_CITY,
        placeholder: 'Miejscowość',
    },
    [WORKSHOP_STREET]: {
        name: WORKSHOP_STREET,
        label: 'Ulica numer domu',
        id: WORKSHOP_STREET,
        placeholder: 'Ulica',
    },
    [WORKSHOP_LOCAL_NUMBER]: {
        name: WORKSHOP_LOCAL_NUMBER,
        label: 'EXAMPLE',
        id: WORKSHOP_LOCAL_NUMBER,
        placeholder: 'Numer domu',
    },

    [CO_OWNER_EXIST]: {
        name: CO_OWNER_EXIST,
        label: 'Czy pojazd posiada współwłaściciela',
        id: CO_OWNER_EXIST,
    },
    [CO_OWNER]: { name: CO_OWNER, label: 'Współwłaścicielem pojazdu jest:', id: CO_OWNER },

    [CO_OWNER_TYPE]: { name: CO_OWNER_TYPE, label: '', id: CO_OWNER_TYPE },

    [CO_OWNER_PERSON_NAME]: {
        name: CO_OWNER_PERSON_NAME,
        label: 'Imię i nazwisko',
        id: CO_OWNER_PERSON_NAME,
        placeholder: 'Imię',
    },
    [CO_OWNER_PERSON_SURNAME]: {
        name: CO_OWNER_PERSON_SURNAME,
        label: 'EXAMPLE',
        id: CO_OWNER_PERSON_SURNAME,
        placeholder: 'Nazwisko',
    },
    [CO_OWNER_PERSON_PHONE]: {
        name: CO_OWNER_PERSON_PHONE,
        label: 'Telefon komórkowy',
        id: CO_OWNER_PERSON_PHONE,
    },
    [CO_OWNER_PERSON_EMAIL]: {
        name: CO_OWNER_PERSON_EMAIL,
        label: 'Adres email',
        id: CO_OWNER_PERSON_EMAIL,
        placeholder: 'Adres email',
    },
    [CO_OWNER_PERSON_EMAIL_CONFIRM]: {
        name: CO_OWNER_PERSON_EMAIL_CONFIRM,
        label: 'EXAMPLE',
        id: CO_OWNER_PERSON_EMAIL_CONFIRM,
        placeholder: 'Powtórz adres email',
    },
    [CO_OWNER_PERSON_CODE]: {
        name: CO_OWNER_PERSON_CODE,
        label: 'Kod pocztowy i miejscowość',
        id: CO_OWNER_PERSON_CODE,
    },
    [CO_OWNER_PERSON_CITY]: {
        name: CO_OWNER_PERSON_CITY,
        label: 'EXAMPLE',
        id: CO_OWNER_PERSON_CITY,
        placeholder: 'Miejscowość',
    },
    [CO_OWNER_PERSON_STREET]: {
        name: CO_OWNER_PERSON_STREET,
        label: 'Ulica numer domu',
        id: CO_OWNER_PERSON_STREET,
        placeholder: 'Ulica',
    },
    [CO_OWNER_PERSON_LOCAL_NUMBER]: {
        name: CO_OWNER_PERSON_LOCAL_NUMBER,
        label: 'EXAMPLE',
        id: CO_OWNER_PERSON_LOCAL_NUMBER,
        placeholder: 'Numer domu',
    },
    [CO_OWNER_PERSON_PESEL]: {
        name: CO_OWNER_PERSON_PESEL,
        label: 'PESEL',
        id: CO_OWNER_PERSON_PESEL,
        placeholder: 'Pesel',
    },

    [CO_OWNER_COMPANY_NAME]: {
        name: CO_OWNER_COMPANY_NAME,
        label: 'Nazwa firmy i REGON',
        id: CO_OWNER_COMPANY_NAME,
        placeholder: 'Nazwa firmy',
    },
    [CO_OWNER_COMPANY_REGON]: {
        name: CO_OWNER_COMPANY_REGON,
        label: 'EXAMPLE',
        id: CO_OWNER_COMPANY_REGON,
        placeholder: 'REGON',
    },
    [CO_OWNER_COMPANY_PHONE]: {
        name: CO_OWNER_COMPANY_PHONE,
        label: 'Telefon komórkowy',
        id: CO_OWNER_COMPANY_PHONE,
    },
    [CO_OWNER_COMPANY_EMAIL]: {
        name: CO_OWNER_COMPANY_EMAIL,
        label: 'Adres email',
        id: CO_OWNER_COMPANY_EMAIL,
        placeholder: 'Adres email',
    },
    [CO_OWNER_COMPANY_EMAIL_CONFIRM]: {
        name: CO_OWNER_COMPANY_EMAIL_CONFIRM,
        label: 'EXAMPLE',
        id: CO_OWNER_COMPANY_EMAIL_CONFIRM,
        placeholder: 'Powtórz adres email',
    },
    [CO_OWNER_COMPANY_CODE]: {
        name: CO_OWNER_COMPANY_CODE,
        label: 'Kod pocztowy i miejscowość',
        id: CO_OWNER_COMPANY_CODE,
    },
    [CO_OWNER_COMPANY_CITY]: {
        name: CO_OWNER_COMPANY_CITY,
        label: 'EXAMPLE',
        id: CO_OWNER_COMPANY_CITY,
        placeholder: 'Miejscowość',
    },
    [CO_OWNER_COMPANY_STREET]: {
        name: CO_OWNER_COMPANY_STREET,
        label: 'Ulica numer domu',
        id: CO_OWNER_COMPANY_STREET,
        placeholder: 'Ulica',
    },
    [CO_OWNER_COMPANY_LOCAL_NUMBER]: {
        name: CO_OWNER_COMPANY_LOCAL_NUMBER,
        label: 'EXAMPLE',
        id: CO_OWNER_COMPANY_LOCAL_NUMBER,
        placeholder: 'Numer domu',
    },

    [OWNER_NAME]: {
        name: OWNER_NAME,
        label: 'Nazwa firmy i REGON',
        id: OWNER_NAME,
        placeholder: 'Imię',
    },
    [OWNER_SURNAME]: {
        name: OWNER_SURNAME,
        label: 'EXAMPLE',
        id: OWNER_SURNAME,
        placeholder: 'Nazwisko',
    },
    [OWNER_PHONE]: { name: OWNER_PHONE, label: 'Telefon komórkowy', id: OWNER_PHONE },
    [OWNER_EMAIL]: {
        name: OWNER_EMAIL,
        label: 'Adres email',
        id: OWNER_EMAIL,
        placeholder: 'Adres email',
    },
    [OWNER_EMAIL_CONFIRM]: {
        name: OWNER_EMAIL_CONFIRM,
        label: 'EXAMPLE',
        id: OWNER_EMAIL_CONFIRM,
        placeholder: 'Powtórz adres email',
    },
    [OWNER_ADDRESS_CODE]: {
        name: OWNER_ADDRESS_CODE,
        label: 'Kod pocztowy i miejscowość',
        id: OWNER_ADDRESS_CODE,
    },
    [OWNER_CITY]: {
        name: OWNER_CITY,
        label: 'EXAMPLE',
        id: OWNER_CITY,
        placeholder: 'Miejscowość',
    },
    [OWNER_STREET]: {
        name: OWNER_STREET,
        label: 'Ulica numer domu',
        id: OWNER_STREET,
        placeholder: 'Ulica',
    },
    [OWNER_LOCAL_NUMBER]: {
        name: OWNER_LOCAL_NUMBER,
        label: 'EXAMPLE',
        id: OWNER_LOCAL_NUMBER,
        placeholder: 'Numer domu',
    },
    [OWNER_PESEL]: {
        name: OWNER_PESEL,
        label: 'PESEL',
        id: OWNER_PESEL,
        placeholder: 'Pesel',
    },

    [CONTACT_OBJECT]: {
        name: CONTACT_OBJECT,
        label: 'Osobą kontaktowną jest:',
        id: CONTACT_OBJECT,
    },

    [CONTACT_NAME]: {
        name: CONTACT_NAME,
        label: 'Imię i nazwisko',
        id: CONTACT_NAME,
        placeholder: 'Imię',
    },
    [CONTACT_SURNAME]: {
        name: CONTACT_SURNAME,
        label: 'EXAMPLE',
        id: CONTACT_SURNAME,
        placeholder: 'Nazwisko',
    },
    [CONTACT_PHONE]: { name: CONTACT_PHONE, label: 'Telefon komórkowy', id: CONTACT_PHONE },
    [CONTACT_EMAIL]: {
        name: CONTACT_EMAIL,
        label: 'Adres email',
        id: CONTACT_EMAIL,
        placeholder: 'Adres email',
    },
    [CONTACT_EMAIL_CONFIRM]: {
        name: CONTACT_EMAIL_CONFIRM,
        label: 'EXAMPLE',
        id: CONTACT_EMAIL_CONFIRM,
        placeholder: 'Powtórz adres email',
    },
    [CONTACT_ADDRESS_CODE]: {
        name: CONTACT_ADDRESS_CODE,
        label: 'Kod pocztowy i miejscowość',
        id: CONTACT_ADDRESS_CODE,
    },
    [CONTACT_CITY]: {
        name: CONTACT_CITY,
        label: 'EXAMPLE',
        id: CONTACT_CITY,
        placeholder: 'Miejscowość',
    },
    [CONTACT_STREET]: {
        name: CONTACT_STREET,
        label: 'Ulica numer domu',
        id: CONTACT_STREET,
        placeholder: 'Ulica',
    },
    [CONTACT_LOCAL_NUMBER]: {
        name: CONTACT_LOCAL_NUMBER,
        label: 'EXAMPLE',
        id: CONTACT_LOCAL_NUMBER,
        placeholder: 'Numer domu',
    },
};

export const thirdStepValidationSchema = Yup.object({
    [DAMAGE_OWNER]: stringValidation,
    [DAMAGE_OWNER_LEASING]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalDamageOwnerLeasing,
        then: stringValidation,
    }),
    [APPLICANT_NAME]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_SURNAME]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_PHONE]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_EMAIL]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_EMAIL_CONFIRM]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_ADDRESS_CODE]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_CITY]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_STREET]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_LOCAL_NUMBER]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),
    [APPLICANT_PESEL]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalApplicantForm,
        then: stringValidation,
    }),

    [WORKSHOP_NAME]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_REGON]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_PHONE]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_EMAIL]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_EMAIL_CONFIRM]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_ADDRESS_CODE]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_CITY]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_STREET]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),
    [WORKSHOP_LOCAL_NUMBER]: Yup.mixed().when(WORKSHOP_BEHALF, {
        is: condtitionalWorkshopForm,
        then: stringValidation,
    }),

    [CO_OWNER_EXIST]: Yup.mixed().when(DAMAGE_OWNER, {
        is: condtitionalCoOwnerExist,
        then: stringValidation,
    }),
    [CO_OWNER]: Yup.mixed().when(CO_OWNER_EXIST, {
        is: condtitionalCoOwner,
        then: stringValidation,
    }),

    [CO_OWNER_TYPE]: Yup.mixed().when([DAMAGE_OWNER, CO_OWNER], {
        is: condtitionalCoOwnerType,
        then: stringValidation,
    }),

    [CO_OWNER_PERSON_NAME]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_SURNAME]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_PHONE]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_EMAIL]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_EMAIL_CONFIRM]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_CODE]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_CITY]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_STREET]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_LOCAL_NUMBER]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),
    [CO_OWNER_PERSON_PESEL]: Yup.mixed().when(CO_OWNER, {
        is: conditionalNaturalPersonForm,
        then: stringValidation,
    }),

    [CO_OWNER_COMPANY_NAME]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_REGON]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_PHONE]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_EMAIL]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_EMAIL_CONFIRM]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_CODE]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_CITY]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_STREET]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),
    [CO_OWNER_COMPANY_LOCAL_NUMBER]: Yup.mixed().when(CO_OWNER, {
        is: conditionalCoOwnerForm,
        then: stringValidation,
    }),

    [OWNER_NAME]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_SURNAME]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_PHONE]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_EMAIL]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_EMAIL_CONFIRM]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_ADDRESS_CODE]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_CITY]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_STREET]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_LOCAL_NUMBER]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [OWNER_PESEL]: Yup.mixed().when(DAMAGE_OWNER, {
        is: conditionalOnwerForm,
        then: stringValidation,
    }),
    [CONTACT_OBJECT]: stringValidation,

    [CONTACT_NAME]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_SURNAME]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_PHONE]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_EMAIL]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_EMAIL_CONFIRM]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_ADDRESS_CODE]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_CITY]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_STREET]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
    [CONTACT_LOCAL_NUMBER]: Yup.mixed().when(CONTACT_OBJECT, {
        is: conditionalContact,
        then: stringValidation,
    }),
});
