import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { ACCOUNT_ACTIVATION } from '../../SSOT/queryKeys';
import { acoountActivationApi } from '../../SSOT/paths/apiPaths';

interface Response {
    message: string;
    userId: string;
}
interface ErrorResponse {
    message: string;
}

export const useAccountActivation = (token: string) => {
    const postAccountActivation = async () => {
        const { data } = await axios.post<Response>(acoountActivationApi, {
            token,
        });
        return data;
    };

    const accountActivation = useQuery<Response, AxiosError<ErrorResponse>, Response>(
        ACCOUNT_ACTIVATION,
        postAccountActivation,
        {
            retry: false,
            refetchOnWindowFocus: false,
        },
    );

    return accountActivation;
};
