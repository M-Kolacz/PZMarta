import React from 'react';
import { RadioGroup as MUIRadioGroup } from 'formik-material-ui';
import { Field } from 'formik';
import { FormControlLabel, Grid, Radio } from '@material-ui/core';

import { GridProps } from '../../../interfaces/MaterialUI';
import RadioLabel, { RadioLabelProps } from '../RadioLabel/RadioLabel';
import { Event } from '../../../types/event';

import useStyles from './RadioGroupStyles';

export interface RadioGroupProps extends RadioLabelProps, GridProps {
    name: string;
    id: string;
    controls: { value: string; label: string }[];
    onClick?: (event: Event) => void;
    error: string | undefined;
    touched: boolean | undefined;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    name,
    id,
    label,
    controls,
    onClick,
    error,
    touched,
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={xs || 12} sm={sm} md={md} lg={lg} xl={xl}>
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
                <RadioLabel label={label} id={id} error={error} touched={touched} />
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
