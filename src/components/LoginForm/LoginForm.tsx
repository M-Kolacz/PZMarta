import React from 'react';
import { Formik, Form } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link } from '@material-ui/core';

import { fieldsData, initialValues } from './data';

import { TextField } from '../../shared/components/Inputs';

export interface LoginFormProps {}

const { email, password } = fieldsData;

const LoginForm: React.FC<LoginFormProps> = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => {
                console.log('formik');
            }}
        >
            {(props) => (
                <Grid item xs={12} md={6}>
                    <Form style={{ width: '94%', margin: '10px auto' }}>
                        <Grid container spacing={2}>
                            <TextField {...email} textFieldGrid={{ xs: 12 }} />
                            <TextField {...password} textFieldGrid={{ xs: 12 }} />
                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                                <Link component={RouterLink} to='/rejestracja'>
                                    Nie posiadasz konta? Zarejestruj się!
                                </Link>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                                <Button variant='contained' color='secondary' type='submit'>
                                    Zaloguj się
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Grid>
            )}
        </Formik>
    );
};

export default LoginForm;
