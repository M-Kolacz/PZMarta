import { Formik, Form } from 'formik';
import React, { useContext } from 'react';
import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/auth-context';
import { loginApi } from '../../../shared/SSOT/paths/apiPaths';
import { fieldsData, initialValues, validationSchema, LoginFormInterface } from './data';
import { registrationPath } from '../../../shared/SSOT/paths/applicationPaths';

import { TextField } from '../../../shared/components/Inputs';
import { LoadingSpinner } from '../../../shared/components/UIElements';

import useStyles from './LoginFormStyles';

export interface LoginFormProps {}

const { email, password } = fieldsData;

const sendLogin = async (userData: LoginFormInterface) => {
    console.log(userData);
    const { data } = await axios.post<{ userId: string; email: string; token: string }>(
        loginApi,
        userData,
    );
    return data;
};

const LoginForm: React.FC<LoginFormProps> = () => {
    const classes = useStyles();
    const history = useHistory();

    const { login } = useContext(AuthContext);

    const loginMutate = useMutation<
        { userId: string; email: string; token: string },
        AxiosError<{ message: string }>,
        LoginFormInterface,
        { tcontext: string }
    >(sendLogin, {
        mutationKey: 'login',
        onSuccess: (data) => {
            login(data.token, null, data.userId!);
            history.push('/');
        },
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                loginMutate.mutate(values);
            }}
        >
            {({ handleBlur }) => (
                <>
                    <Grid item xs={12} md={6}>
                        <Form
                            className={classes.Form}
                            onChange={() => {
                                loginMutate.reset();
                            }}
                        >
                            <Grid container spacing={2}>
                                <TextField {...email} textFieldGrid={{ xs: 12 }} />
                                <TextField {...password} textFieldGrid={{ xs: 12 }} />
                                {loginMutate.isError && (
                                    <Grid item xs={12} className={classes.ErrorContainer}>
                                        <Typography className={classes.Error}>
                                            {loginMutate.error?.response?.data.message}
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
                    <LoadingSpinner open={loginMutate.isLoading} />
                </>
            )}
        </Formik>
    );
};

export default LoginForm;
