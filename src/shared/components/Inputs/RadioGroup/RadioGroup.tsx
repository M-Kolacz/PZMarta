import React from 'react';
import { RadioGroup as MUIRadioGroup } from 'formik-material-ui';
import { Field } from 'formik';
import { FormControlLabel, Grid, Radio } from '@material-ui/core';

import Label, { LabelProps } from '../Label/Label';

import useStyles from './RadioGroupStyles';

export interface RadioGroupProps extends LabelProps {
    name: string;
    id: string;
    controls: { value: string; label: string }[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, id, labelTitle, controls }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Field component={MUIRadioGroup} name={name} className={classes.RadioGroup} id={id}>
                <Label labelTitle={labelTitle} id={id} />
                {controls.map((control) => (
                    <FormControlLabel control={<Radio />} {...control} />
                ))}
            </Field>
        </Grid>
    );
};
