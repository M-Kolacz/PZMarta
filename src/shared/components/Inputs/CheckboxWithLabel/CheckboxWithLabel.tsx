import React from 'react';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
import {
    CheckboxWithLabel as MUICheckboxWithLabel,
    CheckboxWithLabelProps as MUICheckboxWithLabelProps,
} from 'formik-material-ui';

import { Event } from '../../../interfaces/event';
import { GridProps } from '../../../interfaces/MaterialUI';

import useStyles from './CheckboxWithLabelStyles';

export interface CheckboxWithLabelProps
    extends Omit<MUICheckboxWithLabelProps, 'field' | 'form' | 'meta' | 'Label' | 'onClick'> {
    name: string;
    onClick?: (event: Event) => void;
    label: string;
    checkBoxGrid?: GridProps;
}

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
    checkBoxGrid = { xs: 12, md: 6 },
    name,
    label,
    onClick,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.Checkbox} {...checkBoxGrid}>
            <Field
                component={MUICheckboxWithLabel}
                type='checkbox'
                name={name}
                Label={{ label }}
                onClick={(event: Event) => {
                    if (onClick) {
                        onClick(event);
                    }
                }}
                {...props}
            />
        </Grid>
    );
};

export default CheckboxWithLabel;
