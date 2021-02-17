import * as Yup from 'yup';

import { requiredField, emailField, passwordField } from './errorDescriptions';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const dateValidation = Yup.string().trim().required(requiredField).nullable();

export const stringValidation = Yup.string().trim().required(requiredField);

export const objectValidation = Yup.object().required(requiredField).nullable();

export const emailValidation = Yup.string().trim().required(requiredField).email(emailField);

export const booleanValidation = Yup.boolean();

export const passwordValidation = Yup.string()
    .trim()
    .required(requiredField)
    .matches(passwordRegex, {
        message: passwordField,
    });

export const confirmField = (field: string, message: string) =>
    Yup.string()
        .trim()
        .required(requiredField)
        .oneOf([Yup.ref(field), null], message);
