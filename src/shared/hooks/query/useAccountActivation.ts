import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { ACCOUNT_ACTIVATION } from '../../SSOT/queryKeys';
import { acoountActivationApi } from '../../SSOT/paths/apiPaths';

import { IUserData, IErrorResponse } from '../../ts/interfaces';

export const useAccountActivation = (token: string) => {
    const postAccountActivation = async () => {
        const { data } = await axios.post<IUserData>(acoountActivationApi, {
            token,
        });
        return data;
    };

    const accountActivation = useQuery<IUserData, AxiosError<IErrorResponse>, IUserData>(
        ACCOUNT_ACTIVATION,
        postAccountActivation,
        {
            retry: false,
            refetchOnWindowFocus: false,
        },
    );

    return accountActivation;
};
