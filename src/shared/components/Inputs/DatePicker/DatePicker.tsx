import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardDatePickerProps } from 'formik-material-ui-pickers';

import useStyles from './DatePickerStyles';

import { GridProps } from '../../../interfaces/MaterialUI';

export interface DatePickerProps
    extends GridProps,
        Omit<KeyboardDatePickerProps, 'field' | 'form' | 'meta' | 'onChange'> {
    name: string;
    label: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ xs, sm, md, lg, xl, ...props }) => {
    const classes = useStyles();
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Field component={KeyboardDatePicker} className={classes.DataPicker} {...props} />
        </Grid>
    );
};
