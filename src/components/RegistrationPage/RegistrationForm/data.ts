import * as Yup from 'yup';

import {
    emailValidation,
    passwordValidation,
    confirmField,
} from '../../../shared/SSOT/schemas/yup';

const EMAIL = 'email';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirmPassword';

export const initialValues = {
    [EMAIL]: '',
    [PASSWORD]: '',
    [CONFIRM_PASSWORD]: '',
};

export interface ILoginFormInterface {
    [EMAIL]: string;
    [PASSWORD]: string;
    [CONFIRM_PASSWORD]: string;
}

export const fieldsData = {
    [EMAIL]: {
        name: EMAIL,
        label: 'Email',
        id: EMAIL,
        hideLabel: true,
        type: 'email',
    },
    [PASSWORD]: {
        name: PASSWORD,
        label: 'Hasło',
        id: PASSWORD,
        hideLabel: true,
        type: 'password',
    },
    [CONFIRM_PASSWORD]: {
        name: CONFIRM_PASSWORD,
        label: 'Powtórz hasło',
        id: CONFIRM_PASSWORD,
        hideLabel: true,
        type: 'password',
    },
};

export const validationSchema = Yup.object({
    [EMAIL]: emailValidation,
    [PASSWORD]: passwordValidation,
    [CONFIRM_PASSWORD]: confirmField(PASSWORD, 'Hasła muszą być identyczne'),
});
