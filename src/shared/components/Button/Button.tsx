import React from 'react';
import { Grid, Button as MUIButton, ButtonProps as MUIButtonProps } from '@material-ui/core';

import { GridProps } from '../../interfaces/MaterialUI';

import useStyles from './ButtonStyles';

export interface ButtonProps extends MUIButtonProps, GridProps {}

const Button: React.FC<ButtonProps> = ({ children, xs, sm, md, lg, xl, ...buttonProps }) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.ButtonContainer} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <MUIButton className={classes.Button} {...buttonProps}>
                {children}
            </MUIButton>
        </Grid>
    );
};

export default Button;
