import React from 'react';
import { FormLabel, FormHelperText, Grid, GridProps, FormLabelProps } from '@material-ui/core';

import useStyles from './RadioLabelStyles';

export interface RadioLabelProps extends Omit<FormLabelProps, 'error'> {
    label?: string;
    error?: string | undefined;
    touched?: boolean | undefined;
    radioLabelGrid?: GridProps;
}

const RadioLabel: React.FC<RadioLabelProps> = ({
    label,
    id,
    error,
    touched,
    radioLabelGrid = { xs: 12, md: 4 },
}) => {
    const classes = useStyles();
    return (
        <>
            <Grid item className={classes.LabelGrid} {...radioLabelGrid}>
                <FormLabel className={classes.LabelTitle} htmlFor={id} error={touched && !!error}>
                    {label}
                </FormLabel>
                <FormHelperText className={classes.HelperText}>{touched && error}</FormHelperText>
            </Grid>
        </>
    );
};

export default RadioLabel;
