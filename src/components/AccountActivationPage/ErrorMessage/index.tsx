import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Grid } from '@material-ui/core';

import imageActivation from '../../../images/svg/errorEmail.svg';

import useStyles from './ErrorMessageStyles';

export interface SuccessMessageProps {}

const SuccessMessage: React.FC<SuccessMessageProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} md={6} className={classes.ErrorContainer}>
            <img src={imageActivation} alt='' className={classes.ErrorEmail} />
            <Typography variant='h3' className={classes.Title}>
                Niestety werifikacja konta nie powiodła się
            </Typography>
        </Grid>
    );
};

export default SuccessMessage;
