import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { REGISTER } from '../../SSOT/queryKeys';
import { registrationApi } from '../../SSOT/paths/apiPaths';
import { LoginFormInterface } from '../../../components/LoginPage/LoginForm/data';

interface Response {
    message: string;
}
interface ErrorResponse {
    message: string;
}

const postRegistration = async (userData: LoginFormInterface) => {
    const { data } = await axios.post<Response>(registrationApi, userData);
    return data;
};

export const useRegister = (
    options: UseMutationOptions<Response, AxiosError<ErrorResponse>, LoginFormInterface>,
) => {
    const registerMutation = useMutation<Response, AxiosError<ErrorResponse>, LoginFormInterface>(
        postRegistration,
        {
            mutationKey: REGISTER,
            ...options,
        },
    );

    return registerMutation;
};
