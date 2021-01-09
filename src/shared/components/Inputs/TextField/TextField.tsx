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
}

export const TextField: React.FC<TextFieldProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    labelTitle,
    id,
    ...props
}) => {
    const classes = useStyles();
    return (
        <>
            <Label labelTitle={labelTitle} id={id} />
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <Field component={MUITextField} className={classes.TextField} {...props} />
            </Grid>
        </>
    );
};
