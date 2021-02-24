import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { acoountActivationApi } from '../../shared/SSOT/paths/apiPaths';

import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import { LoadingSpinner, Navigation } from '../../shared/components/UIElements';

export interface AccountActivationPageProps {}

interface ActivationParam {
    token: string;
}

export const AccountActivationPage: React.FC<AccountActivationPageProps> = () => {
    const { token } = useParams<ActivationParam>();

    const sendAccountActivation = async () => {
        const { data } = await axios.post<{ message: string; userId: string }>(
            acoountActivationApi,
            { token },
        );
        return data;
    };

    const accountActivation = useQuery('accountActivation', sendAccountActivation, {
        retry: false,
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Navigation navigationTitle='Weryfikacja email' />
            {accountActivation.data && <SuccessMessage userId={accountActivation.data.userId} />}
            {accountActivation.error && <ErrorMessage />}
            <LoadingSpinner open={accountActivation.isLoading} />
        </>
    );
};
