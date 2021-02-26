import React from 'react';
import { useParams } from 'react-router-dom';

import { useAccountActivation } from '../../shared/hooks/query/useAccountActivation';

import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import { LoadingSpinner, Navigation } from '../../shared/components/UIElements';

export interface AccountActivationPageProps {}

interface ActivationParam {
    token: string;
}

export const AccountActivationPage: React.FC<AccountActivationPageProps> = () => {
    const { token } = useParams<ActivationParam>();

    const accountActivation = useAccountActivation(token);

    return (
        <>
            <Navigation navigationTitle='Weryfikacja email' />
            {accountActivation.data && <SuccessMessage userData={accountActivation.data} />}
            {accountActivation.error && <ErrorMessage />}
            <LoadingSpinner open={accountActivation.isLoading} />
        </>
    );
};
