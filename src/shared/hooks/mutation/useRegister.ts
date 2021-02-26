import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { REGISTER } from '../../SSOT/queryKeys';
import { registrationApi } from '../../SSOT/paths/apiPaths';

import { IErrorResponse, IMessageResponse, ILogin } from '../../ts/interfaces';

const postRegistration = async (userData: ILogin) => {
    const { data } = await axios.post<IMessageResponse>(registrationApi, userData);
    return data;
};

export const useRegister = (
    options: UseMutationOptions<IMessageResponse, AxiosError<IErrorResponse>, ILogin>,
) => {
    const registerMutation = useMutation<IMessageResponse, AxiosError<IErrorResponse>, ILogin>(
        postRegistration,
        {
            mutationKey: REGISTER,
            ...options,
        },
    );

    return registerMutation;
};
