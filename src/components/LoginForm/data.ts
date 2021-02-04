const EMAIL = 'email';
const PASSWORD = 'password';

export const initialValues = {
    [EMAIL]: '',
    [PASSWORD]: '',
};

export interface LoginFormInterface {
    [EMAIL]: string;
    [PASSWORD]: string;
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
};
