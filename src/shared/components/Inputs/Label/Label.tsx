import React from 'react';
import { FormLabel, FormHelperText, Grid } from '@material-ui/core';

import useStyles from './LabelStyles';

export interface LabelProps {
    label?: string;
    id: string;
    error: string | undefined;
    touched: boolean | undefined;
    disabled?: boolean | undefined;
}

const Label: React.FC<LabelProps> = ({ label, id, error, touched, disabled }) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} md={4} className={classes.LabelGrid}>
                <FormLabel
                    className={classes.LabelTitle}
                    htmlFor={id}
                    error={touched && !!error}
                    disabled={disabled}
                >
                    {label}
                </FormLabel>
                <FormHelperText className={classes.HelperText}></FormHelperText>
            </Grid>
        </>
    );
};

export default Label;
