import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useFetch } from '../shared/hooks/useFetch';
import { acoountActivationApi } from '../shared/SSOT/paths/apiPaths';
import { loginPath } from '../shared/SSOT/paths/applicationPaths';

import LoadingSpinner from '../shared/components/LoadingSpinner/LoadingSpinner';

export interface AccountActivationPageProps {}

const AccountActivationPage: React.FC<AccountActivationPageProps> = () => {
    const { token } = useParams<{ token: string }>();
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
