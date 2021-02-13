import React from 'react';
import { RadioGroup as MUIRadioGroup } from 'formik-material-ui';
import { Field } from 'formik';
import { FormControlLabel, Grid, Radio } from '@material-ui/core';

import { GridProps } from '../../../interfaces/MaterialUI';
import RadioLabel, { RadioLabelProps } from '../RadioLabel/RadioLabel';
import { Event } from '../../../interfaces/event';

import useStyles from './RadioGroupStyles';

export interface RadioGroupProps {
    name: string;
    id: string;
    label?: string;
    controls: { value: string; label: string }[];
    onClick?: (event: Event) => void;
    error: string | undefined;
    touched: boolean | undefined;
    labelProps?: RadioLabelProps;
    radioGroupGrid?: GridProps;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    name,
    id,
    label,
    controls,
    onClick,
    error,
    touched,
    labelProps,
    radioGroupGrid = { xs: 12 },
}) => {
    const newLabelProps = { label, id, error, touched, ...labelProps };
    const classes = useStyles();

    return (
        <Grid item {...radioGroupGrid}>
            <Field
                component={MUIRadioGroup}
                name={name}
                className={classes.RadioGroup}
                id={id}
                onClick={(event: Event) => {
                    if (onClick) {
                        onClick(event);
                    }
                }}
            >
                <RadioLabel {...newLabelProps} />
                {controls.map((control) => (
                    <FormControlLabel
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        {...control}
                        key={control.value}
                    />
                ))}
            </Field>
        </Grid>
    );
};
