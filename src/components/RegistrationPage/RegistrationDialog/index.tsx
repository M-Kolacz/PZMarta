import React, { useState } from 'react';
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

import { Snackbar } from '../../../shared/components/UIElements';

import useStyles from './RegistrationDialogStyles';
import { useRegister } from '../../../shared/hooks/mutation/useRegister';

export interface RegistrationDialogProps {
    open: boolean;
    handleClose: () => void;
    values: LoginFormInterface;
}

const RegistrationDialog: React.FC<RegistrationDialogProps> = ({ open, handleClose, values }) => {
    const classes = useStyles();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const resendMutation = useRegister({
        onSuccess: () => {
            setOpenSnackbar(true);
        },
    });

    const hadnleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleResendVerification = (email: string) => {
        resendMutation.mutate(values);
    };

    let resendIcon = <EmailIcon />;
    if (resendMutation.isLoading) {
        resendIcon = <CircularProgress color='secondary' size={20} />;
    }

    return (
        <>
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
                <DialogActions className={classes.DialogActions}>
                    <Button
                        onClick={handleClose}
                        color='primary'
                        variant='contained'
                        className={classes.ActionButton}
                    >
                        Zamknij
                    </Button>
                    <Button
                        onClick={() => handleResendVerification(values.email)}
                        color='primary'
                        variant='contained'
                        endIcon={resendIcon}
                        className={classes.ActionButton}
                    >
                        Wyślij ponownie email
                    </Button>
                    <Button
                        component={RouterLink}
                        to={loginPath}
                        color='primary'
                        variant='contained'
                        className={classes.ActionButton}
                    >
                        Zaloguj się
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={openSnackbar}
                onClose={hadnleCloseSnackbar}
                title='Wysłano ponownie email'
                description='Email z weryfikacją został ponownie wysłany'
            />
        </>
    );
};

export default RegistrationDialog;
