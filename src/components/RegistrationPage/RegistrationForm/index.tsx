import { Formik, Form } from 'formik';
import React, { useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography } from '@material-ui/core';

import { useRegister } from '../../../shared/hooks/mutation/useRegister';
import { loginPath } from '../../../shared/SSOT/paths/applicationPaths';
import { fieldsData, initialValues, validationSchema } from './data';

import RegistrationDialog from '../RegistrationDialog';
import { TextField } from '../../../shared/components/Inputs';
import { LoadingSpinner } from '../../../shared/components/UIElements';

import useStyles from './RegistrationFormStyles';

export interface RegistationFormProps {}

const { email, password, confirmPassword } = fieldsData;

const RegistationForm: React.FC<RegistationFormProps> = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const registerMutation = useRegister({ onSuccess: () => setOpen(true) });

    const handleClose = () => {
        setOpen(false);
    };

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
                    <RegistrationDialog open={open} values={values} handleClose={handleClose} />
                </>
            )}
        </Formik>
    );
};

export default RegistationForm;
