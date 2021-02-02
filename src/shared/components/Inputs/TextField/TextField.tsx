import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from 'formik-material-ui';

import Label, { LabelProps } from '../Label/Label';

import useStyles from './TextFieldStyles';

import { GridProps } from '../../../interfaces/MaterialUI';

export interface TextFieldProps
    extends Omit<MUITextFieldProps, 'field' | 'form' | 'meta' | 'onChange'> {
    name: string;
    error?: string;
    touched?: boolean;
    label: string;
    hideLabel?: boolean;
    labelProps?: LabelProps;
    textFieldGrid?: GridProps;
}

export const TextField: React.FC<TextFieldProps> = ({
    id,
    label,
    hideLabel,
    labelProps,
    error,
    touched,
    textFieldGrid = { xs: 12, md: 5 },
    ...props
}) => {
    const newLabelProps = { id, label, error, touched, ...labelProps };
    const classes = useStyles();
    return (
        <>
            {!hideLabel && <Label {...newLabelProps} />}
            <Grid item {...textFieldGrid}>
                <Field
                    component={MUITextField}
                    className={classes.TextField}
                    variant='outlined'
                    label={label}
                    {...props}
                />
            </Grid>
        </>
    );
};
