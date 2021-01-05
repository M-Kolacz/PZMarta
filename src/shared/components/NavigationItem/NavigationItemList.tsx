import React from 'react';
import { Grid } from '@material-ui/core';

import { NotificationButtons } from '../../SSOT/NotificationButtons';

import NavigationItem from './NavigationItem';

import useStyles from './NavigationItemStyles';

export interface NavigationItemListProps {}

const NavigationItemList: React.FC<NavigationItemListProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} spacing={2} className={classes.NotificationItems}>
            {NotificationButtons.map(({ description, documents, title, icon, link }) => (
                <NavigationItem
                    description={description}
                    documents={documents}
                    title={title}
                    icon={icon}
                    key={title}
                    link={link}
                />
            ))}
        </Grid>
    );
};

export default NavigationItemList;
