import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';

import { useAuth } from './shared/hooks/useAuth';
import { AuthContext } from './context/auth-context';
import {
    mainPath,
    comumunicationDamagePath,
    loginPath,
    registrationPath,
    accountActivationPath,
} from './shared/SSOT/paths/applicationPaths';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RegistrationPage from './pages/RegistationPage';
import CommunicationPage from './pages/CommunicationPage';
import AccountActivationPage from './pages/AccountActivationPage';

import useStyles from './AppStyles';

function App() {
    const classes = useStyles();

    const { login, logout, token, userId } = useAuth();
    return (
        <AuthContext.Provider value={{ isLoggedIn: !!token, token, login, logout, userId }}>
            <CssBaseline>
                <Grid container className={classes.AppContainer}>
                    <Header />
                    <Switch>
                        <Route exact path={mainPath} component={MainPage} />
                        <Route path={comumunicationDamagePath} component={CommunicationPage} />
                        <Route path={accountActivationPath} component={AccountActivationPage} />
                        <Route path={loginPath} component={LoginPage} />
                        <Route path={registrationPath} component={RegistrationPage} />
                        <Redirect to={mainPath} />
                    </Switch>
                    <Footer />
                </Grid>
            </CssBaseline>
        </AuthContext.Provider>
    );
}

export default App;
