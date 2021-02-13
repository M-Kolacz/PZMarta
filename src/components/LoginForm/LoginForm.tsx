import { Formik, Form } from 'formik';
import React, { useContext } from 'react';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { useFetch } from '../../shared/hooks/useFetch';
import { AuthContext } from '../../context/auth-context';
import { loginApi } from '../../shared/SSOT/paths/apiPaths';
import { fieldsData, initialValues, validationSchema } from './data';
import { registrationPath } from '../../shared/SSOT/paths/applicationPaths';

import { TextField } from '../../shared/components/Inputs';
import LoadingSpinner from '../../shared/components/LoadingSpinner/LoadingSpinner';

import useStyles from './LoginFormStyles';

export interface LoginFormProps {}

const { email, password } = fieldsData;

const LoginForm: React.FC<LoginFormProps> = () => {
    const classes = useStyles();
    const history = useHistory();

    const { login } = useContext(AuthContext);

    const { sendRequest, clearError, error, isLoading } = useFetch();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                actions.validateForm();
                try {
                    const response = await sendRequest(loginApi, 'POST', values);
                    login(response.token as any, null, response.userId);
                    history.push('/');
                } catch (error) {
                    actions.setErrors({ [email.name]: true, [password.name]: true });
                }
            }}
        >
            {({ handleBlur }) => (
                <>
                    <Grid item xs={12} md={6}>
                        <Form
                            className={classes.Form}
                            onChange={() => {
                                clearError();
                            }}
                        >
                            <Grid container spacing={2}>
                                <TextField
                                    {...email}
                                    textFieldGrid={{ xs: 12 }}
                                    onBlur={(e) => {
                                        handleBlur(e);
                                        clearError();
                                    }}
                                />
                                <TextField
                                    {...password}
                                    textFieldGrid={{ xs: 12 }}
                                    onBlur={(e) => {
                                        handleBlur(e);
                                        clearError();
                                    }}
                                />
                                {error && (
                                    <Grid item xs={12} className={classes.ErrorContainer}>
                                        <Typography className={classes.Error}>
                                            Podany login lub hasło są nieprawidłowe.
                                        </Typography>
                                    </Grid>
                                )}
                                <Grid item xs={12} className={classes.FormElementContainer}>
                                    <Link component={RouterLink} to={registrationPath}>
                                        Nie posiadasz konta? Zarejestruj się!
                                    </Link>
                                </Grid>
                                <Grid item xs={12} className={classes.FormElementContainer}>
                                    <Button variant='contained' color='secondary' type='submit'>
                                        Zaloguj się
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Grid>
                    <LoadingSpinner open={isLoading} />
                </>
            )}
        </Formik>
    );
};

export default LoginForm;
