import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardDatePickerProps } from 'formik-material-ui-pickers';

import useStyles from './DatePickerStyles';

import { GridProps } from '../../../interfaces/MaterialUI';

export interface DatePickerProps
    extends Omit<KeyboardDatePickerProps, 'field' | 'form' | 'meta' | 'onChange'> {
    name: string;
    label: string;
    datePickerGrid?: GridProps;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    datePickerGrid = { xs: 12, sm: 6 },
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid item {...datePickerGrid}>
            <Field
                component={KeyboardDatePicker}
                className={classes.DataPicker}
                format={'d MMMM'}
                {...props}
            />
        </Grid>
    );
};
