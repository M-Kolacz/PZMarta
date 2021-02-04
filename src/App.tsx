import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';

import { mainPath, comumunicationDamagePath, loginPath } from './shared/SSOT/paths';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CommunicationPage from './pages/CommunicationPage';

import useStyles from './AppStyles';

function App() {
    const classes = useStyles();
    return (
        <CssBaseline>
            <Grid container className={classes.AppContainer}>
                <Header />
                <Switch>
                    <Route exact path={mainPath} component={MainPage} />
                    <Route path={comumunicationDamagePath} component={CommunicationPage} />
                    <Route path={loginPath} component={LoginPage} />

                    <Redirect to={mainPath} />
                </Switch>
                <Footer />
            </Grid>
        </CssBaseline>
    );
}

export default App;
