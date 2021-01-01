import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@material-ui/core';

export interface ButtonProps {}

function Button<C extends React.ElementType>(props: MUIButtonProps<C, { component: C }>) {
    return <MUIButton {...props} />;
}

export default Button;
