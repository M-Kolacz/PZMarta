export const damageOptions = [
    { value: 'car', label: 'Pojazdu' },
    { value: 'assets', label: 'Majątku' },
    { value: 'person', label: 'Osoby' },
];
export const personDeathOptions = [
    { value: 'yes', label: 'Tak' },
    { value: 'no', label: 'Nie' },
];
export const ownerOptions = [
    { value: 'personal', label: 'Własnego' },
    { value: 'confessor', label: 'Sprawcy' },
];

export const policyOwnerOptions = [
    { value: 'naturalPerson', label: 'Osoba fizyczna' },
    { value: 'company', label: 'Firma' },
];

export const vehicleOwnOptions = [
    { value: 'ownFault', label: 'Pojazd został uszkodzony z Twojej winy' },
    { value: 'unknownConfessor', label: 'Uszkodzenia spowodował nieznany sprawca' },
    { value: 'stolen', label: 'Pojazd został skradziony' },
    { value: 'windshield', label: 'Uszkodzenie wyłącznie szyb' },
    { value: 'anotherVehicle', label: 'Uszkodzenie spowodował inny pojazd (OC Szybka Wypłata)' },
    { value: 'other', label: 'Uszkodzenia powstały w innych okolicznościach' },
];

export const vehicleConfessorOptions = [
    { value: 'anotherCar', label: 'Uszkodzenia spowodował inny pojazd' },
    { value: 'person', label: 'Uszkodzenia spowodowała osoba' },
    { value: 'transportVehicle', label: 'Uszkodzenia powstały podczas transportu pojazdu' },
    { value: 'other', label: 'Uszkodzenia powstały w innych okolicznościach' },
];
export const assetsOwnOptions = [
    { value: 'accessories', label: 'Telefon, sprzęt elektroniczny, AGD' },
    { value: 'companyAssets', label: 'Budynek, majątek firmy' },
    { value: 'property', label: 'Dom, mieszkanie, garaż, ogrodzenie lub inny budynek na posesji' },
    { value: 'equipment', label: 'Wyposażenie domu, mieszkania lub inne ruchomości' },
    { value: 'luggage', label: 'Bagaż, odwołanie podróży' },
    { value: 'agricultural', label: 'Majątek gospodarsta rolnego' },
];
export const assetsConfessorOptions = [
    { value: 'personDamage', label: 'Uszkodzenia powstały z winy innej osoby' },
    { value: 'vehicleDamage', label: 'Uszkodzenia powstały w zdarzeniu z udziałem pojazdu' },
    { value: 'companyDamage', label: 'Uszkodzenia powstały z winy firmy lub jej pracownika' },
    { value: 'transportDamage', label: 'Uszkodzenia powstały z winy firmy transportowej' },
];

export const personOwnOptions = [
    { value: 'vehicleDamage', label: 'Obrażenie powstały w zdarzeniu z udziałem pojazdu' },
    { value: 'unhappyDamage', label: 'Obrażenia powstały w nieszczęśliwym wypadku' },
    { value: 'childDamage', label: 'Dziecko doznało obrażeń lub zachorowało' },
    { value: 'travelDamage', label: 'Poniesiono koszty leczenia podczas podróży' },
];

export const personConfessorOptions = [
    { value: 'vehicleDamage', label: 'Obrażenia powstały w zdarzeniu z udziałem pojazdu' },
    { value: 'personDamage', label: 'Obrażenia powstały z winy innej osoby' },
    { value: 'companyDamage', label: 'Obrażenia powstały z winy firmy lub jej pracownika' },
    { value: 'animalDamage', label: 'Obrażenia spowodowało zwierzę domowe' },
];

// export const conditionalReasonOptions = ({ damage, owner: }) => {
//     if (damage === 'car' && owner === 'personal') {
//         return vehicleOwnOptions;
//     } else if (damage === 'car' && owner === 'confessor') {
//         return vehicleConfessorOptions;
//     } else if (damage === 'assets' && owner === 'personal') {
//         return assetsOwnOptions;
//     } else if (damage === 'assets' && owner === 'confessor') {
//         return assetsConfessorOptions;
//     } else if (damage === 'person' && owner === 'personal') {
//         return personOwnOptions;
//     } else if (damage === 'person' && owner === 'confessor') {
//         return personConfessorOptions;
//     } else {
//         return [];
//     }
// };
