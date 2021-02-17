import React from 'react';
import { Hidden } from '@material-ui/core';

import srcImg from '../../images/svg/login.svg';

import LoginForm from './LoginForm';
import { Image, Navigation } from '../../shared/components/UIElements';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <>
            <Navigation navigationTitle='Logowanie' />
            <Hidden smDown={true}>
                <Image image={{ src: srcImg, alt: '', role: 'presentation' }} />
            </Hidden>
            <LoginForm />
        </>
    );
};
