const DATE = 'date';
const TIME = 'time';
const DAMAGE = 'damage';
const PERSON_DEATH = 'personDeath';
const OWNER = 'owner';
const REASON = 'reason';
const POLICY = 'policy';
const KNOWN_POLICY = 'knownPolicy';
const REGISTRATION_NUMBER = 'registrationNumber';
const VEHICLE_LEASING = 'vehicleLeasing';
const POLICY_OWNER = 'policyOwner';
const PERSONAL_IDENTITY = 'personalIdentity';
const REGON = 'regon';

export const firstStepInitialValues = {
    [DATE]: null,
    [TIME]: null,
    [DAMAGE]: '',
    [PERSON_DEATH]: null,
    [OWNER]: '',
    [REASON]: '',
    [POLICY]: '',
    [KNOWN_POLICY]: false,
    [REGISTRATION_NUMBER]: '',
    [VEHICLE_LEASING]: '',
    [POLICY_OWNER]: '',
    [PERSONAL_IDENTITY]: '',
    [REGON]: '',
};

export const fieldsData = {
    [DATE]: {
        name: DATE,
        label: 'Data zdarzenia',
    },
    [TIME]: {
        name: TIME,
        label: 'Czas zdarzenia',
    },
    [DAMAGE]: {
        name: DAMAGE,
        label: 'Czego dotyczy zgłoszenie?',
    },
    [PERSON_DEATH]: {
        name: PERSON_DEATH,
        label: 'Czy na skutek zdarzenia nastąpiła śmierć poszkodowanego?',
    },
    [OWNER]: {
        name: OWNER,
        label: 'Z czyjego ubezpieczenia zgłaszasz szkodę?',
    },
    [REASON]: {
        name: REASON,
        label: 'Wybierz przyczynę najlepiej pasującą do zdarzenia',
    },
    [POLICY]: {
        name: POLICY,
        label: 'Podaj numer polisy',
    },
    [REGISTRATION_NUMBER]: {
        name: REGISTRATION_NUMBER,
        label: 'Podaj numer rejestracyjny pojazdu',
    },
    [POLICY_OWNER]: {
        name: POLICY_OWNER,
        label: 'Właścicielem polisy jest',
    },
    [VEHICLE_LEASING]: {
        name: VEHICLE_LEASING,
        label: 'Czy pojazd poszkodowanego jest przedmiotem leasingu?',
    },
    [REGON]: {
        name: REGON,
        label: 'REGON',
    },
    [PERSONAL_IDENTITY]: {
        name: PERSONAL_IDENTITY,
        label: 'Pesel poszkodowanego',
    },
    [KNOWN_POLICY]: {
        name: KNOWN_POLICY,
        label: 'Nie znam numeru polisy',
    },
};
