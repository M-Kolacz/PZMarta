import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './NotificationButtonStyles';

export interface NotificationButtonProps {
    title: string;
    description: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({ title, description }) => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} md={4}>
            <Grid item className={classes.ButtonBorder}>
                <Grid item className={classes.ButtonContainer}>
                    <Typography className={classes.ButtonTitle} variant='h3'>
                        {title}
                    </Typography>
                    <Typography className={classes.ButtonDescription}>{description}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NotificationButton;
