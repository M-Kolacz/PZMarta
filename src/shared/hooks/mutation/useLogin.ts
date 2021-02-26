import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { LOGIN } from '../../SSOT/queryKeys';
import { loginApi } from '../../SSOT/paths/apiPaths';
import { LoginFormInterface } from '../../../components/LoginPage/LoginForm/data';

interface Response {
    userId: string;
    token: string;
}
interface ErrorResponse {
    message: string;
}

const sendLogin = async (userData: LoginFormInterface) => {
    const { data } = await axios.post<Response>(loginApi, userData);
    return data;
};

export const useLogin = (
    options: UseMutationOptions<Response, AxiosError<ErrorResponse>, LoginFormInterface>,
) => {
    const useLogin = useMutation<Response, AxiosError<ErrorResponse>, LoginFormInterface>(
        sendLogin,
        {
            mutationKey: LOGIN,
            ...options,
        },
    );
    return useLogin;
};
