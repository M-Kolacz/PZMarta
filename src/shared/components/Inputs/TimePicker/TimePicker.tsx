import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardTimePickerProps } from 'formik-material-ui-pickers';

import useStyles from './TimePickerStyles';

import { GridProps } from '../../../interfaces/MaterialUI';

export interface TimePickerProps
    extends GridProps,
        Omit<KeyboardTimePickerProps, 'field' | 'form' | 'meta' | 'onChange'> {
    name: string;
    label: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({ xs, sm, md, lg, xl, ...props }) => {
    const classes = useStyles();
    return (
        <Grid item xs={xs || 12} sm={sm || 6} md={md} lg={lg} xl={xl}>
            <Field component={KeyboardTimePicker} className={classes.TimePicker} {...props} />
        </Grid>
    );
};
