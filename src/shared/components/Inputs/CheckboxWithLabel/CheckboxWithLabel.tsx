import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import {
    CheckboxWithLabel as MUICheckboxWithLabel,
    CheckboxWithLabelProps as MUICheckboxWithLabelProps,
} from 'formik-material-ui';

import { GridProps } from '../../../interfaces/MaterialUI';

import useStyles from './CheckboxWithLabelStyles';

export interface CheckboxWithLabelProps
    extends GridProps,
        Omit<MUICheckboxWithLabelProps, 'field' | 'form' | 'meta' | 'Label'> {
    name: string;
    label: string;
}

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    name,
    label,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={classes.Checkbox}>
            <Field
                component={MUICheckboxWithLabel}
                type='checkbox'
                name={name}
                Label={{ label }}
                {...props}
            />
        </Grid>
    );
};

export default CheckboxWithLabel;
