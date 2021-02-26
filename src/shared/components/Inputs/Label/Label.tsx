import React from 'react';
import { FormLabel, FormLabelProps, FormHelperText, Grid, GridProps } from '@material-ui/core';

import useStyles from './LabelStyles';

export interface LabelProps extends Omit<FormLabelProps, 'error'> {
    label?: string;
    error?: string;
    touched?: boolean;
    labelGrid?: GridProps;
}

const Label: React.FC<LabelProps> = ({
    label,
    id,
    error,
    touched,
    labelGrid = { xs: 12, md: 4 },
    ...formLabelProps
}) => {
    const classes = useStyles();

    return (
        <>
            <Grid item className={classes.LabelGrid} {...labelGrid}>
                <FormLabel
                    className={classes.LabelTitle}
                    htmlFor={id}
                    error={touched && !!error}
                    {...formLabelProps}
                >
                    {label}
                </FormLabel>
                <FormHelperText className={classes.HelperText}></FormHelperText>
            </Grid>
        </>
    );
};

export default Label;
