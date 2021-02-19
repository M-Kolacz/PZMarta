import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './NavigationStyles';

export interface NavigationProps {
    navigationTitle: string;
}

export const Navigation: React.FC<NavigationProps> = ({ navigationTitle, children }) => {
    const classes = useStyles();
    return (
        <Grid container item className={classes.NotificationContainer} component='nav'>
            <Typography variant='h3' className={classes.NotificationTitle}>
                {navigationTitle}
            </Typography>
            {children}
        </Grid>
    );
};

export default Navigation;
