import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';

import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import useStyles from './AppStyles';

function App() {
    const classes = useStyles();
    return (
        <CssBaseline>
            <Grid container className={classes.AppContainer}>
                <Header />
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </Grid>
        </CssBaseline>
    );
}

export default App;
