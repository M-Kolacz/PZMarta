import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Navigation from './components/Navigation/Navigation';
import Notification from './components/Notification/Notification';

import useStyles from './AppStyles';

function App() {
    const classes = useStyles();
    return (
        <CssBaseline>
            <Grid container className={classes.AppContainer}>
                <Navigation />
                <Notification />
            </Grid>
        </CssBaseline>
    );
}

export default App;
