import * as Yup from 'yup';

import { stringValidation, booleanValidation } from '../../../../shared/SSOT/schemas/yup';

import {
    conditionalCountry,
    conditionalInjuredPerson,
    conditionalPoliceData,
    conditionalPoliceUnitCity,
    YesNo,
} from './conditionals';

const CITY = 'city';
const STREET = 'street';
const APARTMENT_NUMBER = 'apartmentNumber';
const ABOARD = 'aboard';
const COUNTRY = 'country';
const COURNTY_CITY = 'countryCity';
const PARKED_CAR = 'parkedCar';
const INJURED_PERSON = 'injuredPerson';
const COURSE_EVENT = 'courseEvent';
const PERPETRATOR_STATEMENT = 'perpetratorStatement';
const PUBBLIC_SERVICES = 'publicServices';
const POLICE_DATA = 'policeData';
const POLICE_UNIT = 'policeUnit';
const POLICE_CITY = 'policeCity';

export const secondStepInitialValues = {
    [CITY]: '',
    [STREET]: '',
    [APARTMENT_NUMBER]: '',
    [ABOARD]: false,
    [COUNTRY]: '',
    [COURNTY_CITY]: '',
    [PARKED_CAR]: '',
    [INJURED_PERSON]: '',
    [COURSE_EVENT]: '',
    [PERPETRATOR_STATEMENT]: '',
    [PUBBLIC_SERVICES]: '',
    [POLICE_DATA]: '',
    [POLICE_UNIT]: '',
    [POLICE_CITY]: '',
};
export interface SecondStepForm {
    [CITY]: string;
    [STREET]: string;
    [APARTMENT_NUMBER]: string;
    [ABOARD]: boolean;
    [COUNTRY]: string;
    [COURNTY_CITY]: string;
    [PARKED_CAR]: YesNo;
    [INJURED_PERSON]: YesNo;
    [COURSE_EVENT]: string;
    [PERPETRATOR_STATEMENT]: YesNo;
    [PUBBLIC_SERVICES]: string;
    [POLICE_DATA]: YesNo;
    [POLICE_UNIT]: string;
    [POLICE_CITY]: string;
}

export const fieldsData = {
    [CITY]: {
        name: CITY,
        label: 'Miejscowość',
        id: CITY,
    },
    [STREET]: {
        name: STREET,
        label: 'Ulica',
        id: STREET,
    },
    [APARTMENT_NUMBER]: {
        name: APARTMENT_NUMBER,
        label: 'Numer lokalu',
        id: APARTMENT_NUMBER,
    },
    [ABOARD]: {
        name: ABOARD,
        label: 'Zdarzenie powstało za granicą',
        id: ABOARD,
    },
    [COUNTRY]: {
        name: COUNTRY,
        label: 'Wybierz kraj',
        id: COUNTRY,
    },
    [COURNTY_CITY]: {
        name: COURNTY_CITY,
        label: 'Miejscowość',
        id: COURNTY_CITY,
    },
    [PARKED_CAR]: {
        name: PARKED_CAR,
        label: 'Czy pojazd był zaparkowany?',
        id: PARKED_CAR,
    },
    [INJURED_PERSON]: {
        name: INJURED_PERSON,
        label: 'Czy były osoby ranne?',
        id: INJURED_PERSON,
    },
    [COURSE_EVENT]: {
        name: COURSE_EVENT,
        label: 'Opisz przebieg zdarzenia:',
        id: COURSE_EVENT,
    },
    [PERPETRATOR_STATEMENT]: {
        name: PERPETRATOR_STATEMENT,
        label: 'Czy spisano oświadczenie ze sprawcą zdarzenia ?',
        id: PERPETRATOR_STATEMENT,
    },
    [PUBBLIC_SERVICES]: {
        name: PUBBLIC_SERVICES,
        label: 'O zdarzeniu powiadomiono:',
        id: PUBBLIC_SERVICES,
    },
    [POLICE_DATA]: {
        name: POLICE_DATA,
        label: 'Czy znasz dane policji',
        id: POLICE_DATA,
    },
    [POLICE_UNIT]: {
        name: POLICE_UNIT,
        label: 'Jednostka',
        id: POLICE_UNIT,
    },
    [POLICE_CITY]: {
        name: POLICE_CITY,
        label: 'Miejscowość',
        id: POLICE_CITY,
    },
};

export const secondStepValidationSchema = Yup.object({
    [CITY]: Yup.mixed().when(ABOARD, {
        is: !conditionalCountry,
        then: stringValidation,
    }),
    [STREET]: Yup.mixed().when(ABOARD, {
        is: !conditionalCountry,
        then: stringValidation,
    }),
    [APARTMENT_NUMBER]: Yup.mixed().when(ABOARD, {
        is: !conditionalCountry,
        then: stringValidation,
    }),
    [ABOARD]: booleanValidation,
    [COUNTRY]: Yup.mixed().when(ABOARD, {
        is: conditionalCountry,
        then: stringValidation,
    }),
    [COURNTY_CITY]: Yup.mixed().when(ABOARD, {
        is: conditionalCountry,
        then: stringValidation,
    }),
    [PARKED_CAR]: stringValidation,
    [INJURED_PERSON]: Yup.mixed().when(PARKED_CAR, {
        is: conditionalInjuredPerson,
        then: stringValidation,
    }),
    [COURSE_EVENT]: stringValidation,
    [PERPETRATOR_STATEMENT]: stringValidation,
    [PUBBLIC_SERVICES]: stringValidation,
    [POLICE_DATA]: Yup.mixed().when(PUBBLIC_SERVICES, {
        is: conditionalPoliceData,
        then: stringValidation,
    }),
    [POLICE_UNIT]: Yup.mixed().when(POLICE_DATA, {
        is: conditionalPoliceUnitCity,
        then: stringValidation,
    }),
    [POLICE_CITY]: Yup.mixed().when(POLICE_DATA, {
        is: conditionalPoliceUnitCity,
        then: stringValidation,
    }),
});
