import {
    vehicleOwnOptions,
    vehicleConfessorOptions,
    assetsOwnOptions,
    assetsConfessorOptions,
    personOwnOptions,
    personConfessorOptions,
} from './options';

export type Damage = 'car' | 'assets' | 'person';
export type Owner = 'personal' | 'confessor';
export type PolicyOwner = 'naturalPerson' | 'company';

export const conditionalPersonDeath = (damage: Damage) => {
    console.log('render conditionalPersonDeath');
    return damage === 'person';
};

export const conditionalRegistrationNumber = (damage: Damage, owner: Owner) =>
    damage === 'car' && owner === 'personal';

export const conditionalRegon = (policyOwner: PolicyOwner) => policyOwner === 'company';

export const conditionalVehicleLeasing = (damage: Damage, owner: Owner, policyOwner: PolicyOwner) =>
    damage === 'car' && owner === 'personal' && policyOwner === 'company';

export const conditionalPersonalIdentity = (
    damage: Damage,
    owner: Owner,
    policyOwner: PolicyOwner,
) => (damage === 'person' && owner === 'personal') || policyOwner === 'naturalPerson';

export const conditionalPolicyOWner = (damage: Damage, owner: Owner) =>
    (damage === 'assets' && owner === 'personal') || (damage === 'car' && owner === 'personal');

export const conditionalReasonOptions = (damage: any, owner: any) => {
    console.log('conditionalReasonOptions');
    if (damage === 'car' && owner === 'personal') {
        return vehicleOwnOptions;
    } else if (damage === 'car' && owner === 'confessor') {
        return vehicleConfessorOptions;
    } else if (damage === 'assets' && owner === 'personal') {
        return assetsOwnOptions;
    } else if (damage === 'assets' && owner === 'confessor') {
        return assetsConfessorOptions;
    } else if (damage === 'person' && owner === 'personal') {
        return personOwnOptions;
    } else if (damage === 'person' && owner === 'confessor') {
        return personConfessorOptions;
    } else {
        return [];
    }
};
