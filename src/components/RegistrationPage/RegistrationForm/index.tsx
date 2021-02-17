import axios, { AxiosError } from 'axios';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import { registrationApi, resendVerificationApi } from '../../../shared/SSOT/paths/apiPaths';
import { loginPath } from '../../../shared/SSOT/paths/applicationPaths';
import { fieldsData, initialValues, validationSchema, LoginFormInterface } from './data';

import { TextField } from '../../../shared/components/Inputs';
import { LoadingSpinner } from '../../../shared/components/UIElements';

import useStyles from './RegistrationFormStyles';

export interface RegistationFormProps {}

const { email, password, confirmPassword } = fieldsData;

const postRegistration = async (userData: LoginFormInterface) => {
    const { data } = await axios.post<{ userId: number }>(registrationApi, userData);
    return data;
};
const postResendVerification = async (email: string) => {
    const { data } = await axios.post<{ message: string }>(resendVerificationApi, { email });
    return data;
};

const RegistationForm: React.FC<RegistationFormProps> = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const registerMutation = useMutation<
        {},
        AxiosError<{ message: string }>,
        LoginFormInterface,
        { tcontext: string }
    >(postRegistration, {
        mutationKey: 'register',
        onSuccess: () => {
            setOpen(true);
        },
    });

    const resendMutation = useMutation(postResendVerification, {
        mutationKey: 'resendVerification',
    });

    const handleClose = () => {
        setOpen(false);
    };

    const handleResendVerification = (email: string) => {
        resendMutation.mutate(email);
    };

    let buttonIcon = <EmailIcon />;
    if (resendMutation.isLoading) {
        buttonIcon = <CircularProgress color='secondary' size={20} />;
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                actions.validateForm();
                registerMutation.mutate(values);
            }}
        >
            {({ dirty, isValid, values }) => (
                <>
                    <Grid item xs={12} md={6} className={classes.RegistrationFormContainer}>
                        <Form
                            className={classes.Form}
                            onChange={() => {
                                registerMutation.reset();
                            }}
                        >
                            <Grid container spacing={2}>
                                <TextField {...email} textFieldGrid={{ xs: 12 }} />
                                <TextField {...password} textFieldGrid={{ xs: 12 }} />
                                <TextField {...confirmPassword} textFieldGrid={{ xs: 12 }} />
                                {registerMutation.error && (
                                    <Grid item xs={12} className={classes.ErrorContainer}>
                                        <Typography className={classes.Error}>
                                            {registerMutation.error.response?.data.message}
                                        </Typography>
                                    </Grid>
                                )}
                                <Grid item xs={12} className={classes.FormElementContainer}>
                                    <Link component={RouterLink} to={loginPath}>
                                        Posiadasz już konto ? Zaloguj się!
                                    </Link>
                                </Grid>
                                <Grid item xs={12} className={classes.FormElementContainer}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        type='submit'
                                        fullWidth
                                        disabled={!(dirty && isValid)}
                                    >
                                        Zarejestruj się
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Grid>
                    <LoadingSpinner open={registerMutation.isLoading} />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='dialog-title'
                        aria-describedby='dialog-description'
                        disableBackdropClick
                    >
                        <DialogTitle id='dialog-title'>Weryfikacja email</DialogTitle>
                        <DialogContent>
                            <DialogContentText id='dialog-description'>
                                Dziękujemy za dołączenie! Wysłaliśmy Tobie email z instrukcją jak
                                zweryfikować twój adres email <b>{values.email}</b>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='primary' variant='contained'>
                                Zamknij
                            </Button>
                            <Button
                                onClick={() => handleResendVerification(values.email)}
                                color='primary'
                                variant='contained'
                                endIcon={buttonIcon}
                            >
                                Wyślij ponownie email
                            </Button>
                            <Button
                                component={RouterLink}
                                to={loginPath}
                                color='primary'
                                variant='contained'
                            >
                                Zaloguj się
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </Formik>
    );
};

export default RegistationForm;
