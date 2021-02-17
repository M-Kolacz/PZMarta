import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Button } from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';

import { loginPath } from '../../shared/SSOT/paths/applicationPaths';
import { acoountActivationApi } from '../../shared/SSOT/paths/apiPaths';

import { LoadingSpinner } from '../../shared/components/UIElements';

export interface AccountActivationPageProps {}

interface ActivationParam {
    token: string;
}

export const AccountActivationPage: React.FC<AccountActivationPageProps> = () => {
    const { token } = useParams<ActivationParam>();

    const sendAccountActivation = async () => {
        const { data } = await axios.post<{ message: string }>(acoountActivationApi, { token });
        return data;
    };

    const accountActivation = useQuery('accountActivation', sendAccountActivation, {
        retry: false,
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <h1>Weryfikacja email</h1>
            {accountActivation.data?.message && (
                <Button component={RouterLink} to={loginPath} variant='contained' color='primary'>
                    Zaloguj się
                </Button>
            )}
            <LoadingSpinner open={accountActivation.isLoading} />
        </>
    );
};
