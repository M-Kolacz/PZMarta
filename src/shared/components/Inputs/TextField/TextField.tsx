import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from 'formik-material-ui';

import Label, { LabelProps } from '../Label/Label';

import useStyles from './TextFieldStyles';

import { GridProps } from '../../../interfaces/MaterialUI';

export interface TextFieldProps
    extends GridProps,
        LabelProps,
        Omit<MUITextFieldProps, 'field' | 'form' | 'meta' | 'onChange' | 'id'> {
    name: string;
    label?: string;
    error: string | undefined;
    touched: boolean | undefined;
    hideLabel?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    label,
    id,
    error,
    touched,
    disabled,
    hideLabel,
    ...props
}) => {
    const classes = useStyles();
    return (
        <>
            {!hideLabel && (
                <Label label={label} id={id} error={error} touched={touched} disabled={disabled} />
            )}
            <Grid item xs={xs || 12} sm={sm} md={md || 5} lg={lg} xl={xl}>
                <Field
                    component={MUITextField}
                    className={classes.TextField}
                    variant='outlined'
                    disabled={disabled}
                    {...props}
                />
            </Grid>
        </>
    );
};
