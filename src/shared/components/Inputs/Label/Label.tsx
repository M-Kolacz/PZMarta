import React from 'react';
import { FormLabel, FormHelperText, Grid } from '@material-ui/core';

import { GridProps } from '../../../interfaces/MaterialUI';

import useStyles from './LabelStyles';

export interface LabelProps {
    label?: string;
    id: string;
    error: string | undefined;
    touched: boolean | undefined;
    disabled?: boolean | undefined;
    labelSize?: GridProps;
}

const Label: React.FC<LabelProps> = ({ label, id, error, touched, disabled, labelSize }) => {
    const classes = useStyles();

    return (
        <>
            <Grid
                item
                xs={labelSize?.xs || 12}
                sm={labelSize?.sm}
                md={labelSize?.md || 4}
                lg={labelSize?.lg}
                xl={labelSize?.xl}
                className={classes.LabelGrid}
            >
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
