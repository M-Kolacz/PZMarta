import * as Yup from 'yup';

import { requiredField, emailField, passwordField } from './errorDescriptions';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const dateValidation = Yup.string().required(requiredField).nullable();

export const stringValidation = Yup.string().required(requiredField);

export const objectValidation = Yup.object().required(requiredField).nullable();

export const emailValidation = Yup.string().required(requiredField).email(emailField);

export const passwordValidation = Yup.string().required(requiredField).matches(passwordRegex, {
    message: passwordField,
});

export const confirmField = (field: string, message: string) =>
    Yup.string()
        .required(requiredField)
        .oneOf([Yup.ref(field), null], message);

export const booleanValidation = Yup.boolean();
