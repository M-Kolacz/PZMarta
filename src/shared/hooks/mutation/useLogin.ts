import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { LOGIN } from '../../SSOT/queryKeys';
import { loginApi } from '../../SSOT/paths/apiPaths';

import { IUserData, IErrorResponse, ILogin } from '../../ts/interfaces';

const sendLogin = async (userData: ILogin) => {
    const { data } = await axios.post<IUserData>(loginApi, userData);
    return data;
};

export const useLogin = (
    options: UseMutationOptions<IUserData, AxiosError<IErrorResponse>, ILogin>,
) => {
    const useLogin = useMutation<IUserData, AxiosError<IErrorResponse>, ILogin>(sendLogin, {
        mutationKey: LOGIN,
        ...options,
    });
    return useLogin;
};
