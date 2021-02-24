import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Grid } from '@material-ui/core';

import imageActivation from '../../../images/svg/activationEmail.svg';

import useStyles from './SuccessMessageStyles';

export interface SuccessMessageProps {
    userId: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ userId }) => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} md={6} className={classes.MessageContainer}>
            <img src={imageActivation} alt='' className={classes.EnvelopeSvg} />
            <Typography variant='h3' className={classes.Title}>
                Rejestracja udała się!
            </Typography>
            <Typography variant='h6' component='p'>
                Bardzo dziękujemy za Twoje zaufanie w kwesti ubezpieczeń.
            </Typography>
            <Typography variant='h6' component='p'>
                Aby przejść do konta kliknij poniższy przycisk.
            </Typography>
            <Button
                component={RouterLink}
                to={{ pathname: '/', state: { userId } }}
                variant='contained'
                color='secondary'
                fullWidth
            >
                Przejdź do swojego konta
            </Button>
        </Grid>
    );
};

export default SuccessMessage;
