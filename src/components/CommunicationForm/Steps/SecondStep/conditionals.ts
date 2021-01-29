export type YesNo = 'yes' | 'no';

export const conditionalCountry = (aboard: boolean) => aboard;

export const conditionalInjuredPerson = (parkedCar: YesNo) => parkedCar === 'no';

export const conditionalPoliceData = (publicServices: string) => publicServices === 'police';

export const conditionalPoliceUnitCity = (policeData: YesNo) => policeData === 'yes';
