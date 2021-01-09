import React from 'react';
import { RadioGroup as MUIRadioGroup } from 'formik-material-ui';
import { Field } from 'formik';
import { FormControlLabel, Grid, Radio } from '@material-ui/core';

import { GridProps } from '../../../interfaces/MaterialUI';
import Label, { LabelProps } from '../Label/Label';

import useStyles from './RadioGroupStyles';

export interface RadioGroupProps extends LabelProps, GridProps {
    name: string;
    id: string;
    controls: { value: string; label: string }[];
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
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Field component={MUIRadioGroup} name={name} className={classes.RadioGroup} id={id}>
                <Label label={label} id={id} />
                {controls.map((control) => (
                    <FormControlLabel
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        {...control}
                    />
                ))}
            </Field>
        </Grid>
    );
};
