import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './NotificationStyles';

export interface NotificationProps {}

const Notification: React.FC<NotificationProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item className={classes.NotificationContainer}>
            <Grid item xs={12}>
                <Typography className={classes.NotificationTitle}>Zgłoś szkodę</Typography>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Grid>
                        <Typography>Komunikacyjna</Typography>
                        <Typography>w pojeździe lub mienu, uraz ciała, zgon</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Komunikacyjna</Typography>
                    <Typography>w pojeździe lub mienu, uraz ciała, zgon</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Komunikacyjna</Typography>
                    <Typography>w pojeździe lub mienu, uraz ciała, zgon</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Notification;
