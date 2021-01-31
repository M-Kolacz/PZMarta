import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { KeyboardTimePicker, KeyboardTimePickerProps } from 'formik-material-ui-pickers';

import useStyles from './TimePickerStyles';

import { GridProps } from '../../../interfaces/MaterialUI';

export interface TimePickerProps
    extends Omit<KeyboardTimePickerProps, 'field' | 'form' | 'meta' | 'onChange'> {
    name: string;
    label: string;
    timePickerGrid?: GridProps;
}

export const TimePicker: React.FC<TimePickerProps> = ({
    timePickerGrid = { xs: 12, sm: 6 },
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid item {...timePickerGrid}>
            <Field
                component={KeyboardTimePicker}
                className={classes.TimePicker}
                keyboardIcon={<ScheduleIcon />}
                ampm={false}
                {...props}
            />
        </Grid>
    );
};
