import React from 'react';
import { FormLabel, Grid } from '@material-ui/core';

import useStyles from './LabelStyles';

export interface LabelProps {
    labelTitle: string;
    id: string;
    errors?: any;
    touched?: any;
}

const Label: React.FC<LabelProps> = ({ labelTitle, id, errors, touched }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} className={classes.LabelGrid}>
            <FormLabel className={classes.LabelTitle} htmlFor={id}>
                {labelTitle}
            </FormLabel>
        </Grid>
    );
};

export default Label;
