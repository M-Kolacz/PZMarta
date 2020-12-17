import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';

import Logo from '../../shared/UIElements/Logo/Logo';
import Button from '../../shared/components/Button/Button';

import useStyles from './NavigationStyles';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} className={classes.NavigationContainer} component='header'>
            <Logo xs={6} className={classes.LogoContainer} logoClassName={classes.Logo} />
            <Grid
                container
                item
                alignItems='center'
                xs={6}
                className={classes.ComunicationContainer}
            >
                <Button variant='contained' color='primary'>
                    Zaloguj się
                </Button>
                <Hidden xsDown>
                    <Grid item className={classes.ContactContainer}>
                        <Typography className={classes.ContactText}>
                            Masz pytania? Zadzwoń
                        </Typography>
                        <Typography>728 886 453</Typography>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default Navigation;
