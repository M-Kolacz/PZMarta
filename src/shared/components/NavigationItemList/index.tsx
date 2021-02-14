import React from 'react';
import { Grid } from '@material-ui/core';

import { NotificationButtons } from '../../SSOT/pageContent/navigationItems';

import NavigationItem from './NavigationItem';

import useStyles from './NavigationItemStyles';

export interface NavigationItemListProps {}

const NavigationItemList: React.FC<NavigationItemListProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} spacing={2} className={classes.NotificationItems}>
            {NotificationButtons.map((props) => (
                <NavigationItem {...props} key={props.title} />
            ))}
        </Grid>
    );
};

export default NavigationItemList;
