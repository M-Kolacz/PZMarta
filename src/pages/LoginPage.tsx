import React from 'react';
import { Hidden } from '@material-ui/core';

import Navigation from '../components/Navigation/Navigation';
import LoginForm from '../components/LoginForm/LoginForm';
import Image from '../shared/components/Image/Image';

import srcImg from '../images/svg/login.svg';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
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

export default LoginPage;
