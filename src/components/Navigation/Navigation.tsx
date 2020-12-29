import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { NotificationButtons } from '../../shared/SSOT/NotificationButtons';

import NavigationItem from '../../shared/components/NavigationItem/NavigationItem';

import useStyles from './NavigationStyles';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item className={classes.NotificationContainer} component='nav'>
            <Typography variant='h2' className={classes.NotificationTitle}>
                Zgłoś szkodę
            </Typography>
            <Grid container item xs={12} spacing={2} className={classes.NotificationItems}>
                {NotificationButtons.map(({ description, documents, title, icon }) => (
                    <NavigationItem
                        description={description}
                        documents={documents}
                        title={title}
                        icon={icon}
                        key={title}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default Navigation;
