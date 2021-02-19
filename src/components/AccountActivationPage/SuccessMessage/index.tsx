import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import imageActivation from '../../../images/svg/activationEmail.svg';

import useStyles from './SuccessMessageStyles';

export interface SuccessMessageProps {}

const SuccessMessage: React.FC<SuccessMessageProps> = () => {
    const classes = useStyles();
    return (
        <>
            <img src={imageActivation} alt='' className={classes.EnvelopeSvg} />
            <Typography variant='h3' className={classes.Title}>
                Weryfikacja konta udała się!
            </Typography>
            <Typography variant='h6' component='p'>
                Bardzo dziękujemy za Twoje zaufanie w kwesti ubezpieczeń.
            </Typography>
            <Typography variant='h6' component='p'>
                Aby przejść do konta kliknij poniższy przycisk.
            </Typography>
            <Button component={RouterLink} to='/' variant='contained' color='secondary' fullWidth>
                Przejdź do swojego konta
            </Button>
        </>
    );
};

export default SuccessMessage;
