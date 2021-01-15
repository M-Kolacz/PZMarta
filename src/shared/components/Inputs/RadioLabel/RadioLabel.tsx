import React from 'react';
import { FormLabel, FormHelperText, Grid } from '@material-ui/core';

import useStyles from './RadioLabelStyles';

export interface RadioLabelProps {
    label?: string;
    id: string;
    error: string | undefined;
    touched: boolean | undefined;
}

const RadioLabel: React.FC<RadioLabelProps> = ({ label, id, error, touched }) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} md={4} className={classes.LabelGrid}>
                <FormLabel className={classes.LabelTitle} htmlFor={id} error={touched && !!error}>
                    {label}
                </FormLabel>
                <FormHelperText className={classes.HelperText}>{touched && error}</FormHelperText>
            </Grid>
        </>
    );
};

export default RadioLabel;
