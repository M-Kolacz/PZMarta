import * as Yup from 'yup';

import { errorField } from './errorDescriptions';

export const dateValidation = Yup.string().required(errorField).nullable();

export const stringValidation = Yup.string().required(errorField);

export const objectValidation = Yup.object().required(errorField).nullable();

export const booleanValidation = Yup.boolean();
