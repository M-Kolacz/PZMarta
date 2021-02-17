import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';

import { LoginFormInterface } from '../RegistrationForm/data';
import { loginPath } from '../../../shared/SSOT/paths/applicationPaths';
import { resendVerificationApi } from '../../../shared/SSOT/paths/apiPaths';

const postResendVerification = async (email: string) => {
    const { data } = await axios.post<{ message: string }>(resendVerificationApi, { email });
    return data;
};

export interface RegistrationDialogProps {
    open: boolean;
    handleClose: () => void;
    values: LoginFormInterface;
}

const RegistrationDialog: React.FC<RegistrationDialogProps> = ({ open, handleClose, values }) => {
    const resendMutation = useMutation(postResendVerification, {
        mutationKey: 'resendVerification',
    });

    const handleResendVerification = (email: string) => {
        resendMutation.mutate(values.email);
    };

    let buttonIcon = <EmailIcon />;
    if (resendMutation.isLoading) {
        buttonIcon = <CircularProgress color='secondary' size={20} />;
    }

    return (
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
                    Dziękujemy za dołączenie! Wysłaliśmy Tobie email z instrukcją jak zweryfikować
                    twój adres email <b>{values.email}</b>
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
                <Button component={RouterLink} to={loginPath} color='primary' variant='contained'>
                    Zaloguj się
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RegistrationDialog;
