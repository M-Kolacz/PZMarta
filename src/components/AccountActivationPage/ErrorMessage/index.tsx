import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import imageActivation from '../../../images/svg/errorEmail.svg';

import useStyles from './ErrorMessageStyles';

export interface SuccessMessageProps {}

const SuccessMessage: React.FC<SuccessMessageProps> = () => {
    const classes = useStyles();
    return (
        <>
            <img src={imageActivation} alt='' className={classes.ErrorEmail} />
            <Typography variant='h3' className={classes.Title}>
                Niestety werifikacja konta nie powiodła się
            </Typography>
            <Typography variant='h6' component='p'>
                Spróbuj zweryfikować konto później
            </Typography>
        </>
    );
};

export default SuccessMessage;
