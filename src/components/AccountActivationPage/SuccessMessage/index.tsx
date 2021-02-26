import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Grid } from '@material-ui/core';

import { AuthContext } from '../../../context/auth-context';
import imageActivation from '../../../images/svg/activationEmail.svg';

import useStyles from './SuccessMessageStyles';

import { IUserData } from '../../../shared/ts/interfaces';

export interface SuccessMessageProps {
    userData: IUserData;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ userData }) => {
    const classes = useStyles();
    const { token, userId } = userData;
    const { login } = useContext(AuthContext);

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
                onClick={() => login(token, null, userId)}
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
