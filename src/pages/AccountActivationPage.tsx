import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useFetch } from '../shared/hooks/useFetch';
import { loginPath } from '../shared/SSOT/paths/applicationPaths';
import { acoountActivationApi } from '../shared/SSOT/paths/apiPaths';

import LoadingSpinner from '../shared/components/LoadingSpinner/LoadingSpinner';

export interface AccountActivationPageProps {}

interface ActivationParam {
    token: string;
}

const AccountActivationPage: React.FC<AccountActivationPageProps> = () => {
    const { token } = useParams<ActivationParam>();
    const history = useHistory();

    const { sendRequest } = useFetch();

    useEffect(() => {
        const activateAccount = async () => {
            const response = await sendRequest(acoountActivationApi, 'POST', { token }).catch(
                (error) => {
                    return null;
                },
            );
            if (response) {
                history.push(loginPath);
            }
        };
        activateAccount();
    }, [sendRequest, token, history]);

    return <LoadingSpinner open={true} />;
};

export default AccountActivationPage;
