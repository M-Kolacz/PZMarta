import React from 'react';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './LoadingSpinnerStyles';

export interface LoadingSpinnerProps {
    open: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ open }) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color='inherit' />
        </Backdrop>
    );
};

export default LoadingSpinner;
