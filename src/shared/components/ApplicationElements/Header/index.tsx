import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Box, Typography, Hidden, Button } from '@material-ui/core';

import { loginPath } from '../../../SSOT/paths/applicationPaths';

import { Logo } from '../../UIElements';

import useStyles from './HeaderStyles';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            item
            xs={12}
            justify='space-between'
            alignItems='center'
            component='header'
            className={classes.NavigationContainer}
        >
            <Logo className={classes.Logo} />

            <Box className={classes.ComunicationContainer}>
                <Button
                    component={RouterLink}
                    to={loginPath}
                    variant='contained'
                    color='secondary'
                    className={classes.Button}
                >
                    Zaloguj się
                </Button>

                <Hidden xsDown>
                    <Box className={classes.ContactContainer} component='address'>
                        <Typography className={classes.ContactText} variant='body2'>
                            Masz pytania? Zadzwoń
                        </Typography>
                        <Typography variant='body1'>728 886 453</Typography>
                    </Box>
                </Hidden>
            </Box>
        </Grid>
    );
};

export default Header;
