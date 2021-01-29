export type DamageOwner = 'applicant' | 'anotherPerson' | 'company';
export type ContactObject = 'applicant' | 'owner' | 'anotherPerson';
export type YesNo = 'yes' | 'no';
export type CoOwner = 'naturalPerson' | 'bank' | 'legalEntity';

export const conditionalDamageOwnerLeasing = (damageOwner: DamageOwner) =>
    damageOwner === 'company';

export const condtitionalApplicantForm = (damageOwner: DamageOwner) =>
    damageOwner === 'company' || damageOwner === 'anotherPerson' || damageOwner === 'applicant';

export const condtitionalWorkshopForm = (workshopBehalf: boolean) => workshopBehalf;

export const condtitionalCoOwnerExist = (damageOwner: DamageOwner) =>
    damageOwner === 'applicant' || damageOwner === 'anotherPerson';

export const condtitionalCoOwner = (coOwnerExist: YesNo) => coOwnerExist === 'yes';

export const condtitionalCoOwnerType = (damageOwner: DamageOwner, coOwner: CoOwner) =>
    coOwner === 'naturalPerson' && damageOwner === 'anotherPerson';

export const condtitionalWorkshopBehalf = (damageOwner: DamageOwner) =>
    damageOwner === 'anotherPerson' || damageOwner === 'company';

export const conditionalNaturalPersonForm = (coOnwer: CoOwner) => coOnwer === 'naturalPerson';

export const conditionalCoOwnerForm = (coOnwer: CoOwner) =>
    coOnwer === 'bank' || coOnwer === 'legalEntity';

export const conditionalCoOwnerTitle = (coOnwer: CoOwner) => {
    if (coOnwer === 'bank') {
        return 'Bank';
    } else {
        return 'Podmiot prawny';
    }
};

export const conditionalContact = (contactObject: ContactObject) =>
    contactObject === 'anotherPerson';

export const conditionalOnwerForm = (damageOwner: DamageOwner) =>
    damageOwner === 'anotherPerson' || damageOwner === 'company';
