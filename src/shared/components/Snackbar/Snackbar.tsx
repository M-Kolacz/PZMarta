import React from 'react';
import { Alert, AlertProps, AlertTitle } from '@material-ui/lab';
import { Snackbar as MUISnackbar, SnackbarProps as MUISnackbarProps } from '@material-ui/core';

export interface SnackbarProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    snackbarProps?: MUISnackbarProps;
    alertProps?: AlertProps;
}

const Snackbar: React.FC<SnackbarProps> = ({
    alertProps,
    snackbarProps,
    onClose,
    open,
    title,
    description,
}) => {
    return (
        <MUISnackbar autoHideDuration={10000} {...snackbarProps} open={open} onClose={onClose}>
            <Alert {...alertProps} onClose={onClose}>
                <AlertTitle>{title}</AlertTitle>
                {description}
            </Alert>
        </MUISnackbar>
    );
};

export default Snackbar;
