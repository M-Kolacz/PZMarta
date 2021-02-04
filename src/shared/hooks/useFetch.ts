import { useState, useRef, useCallback, useEffect } from 'react';

import { CustomError } from '../Error';

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | { message: string; statusCode: number }>(null);

    const activeHttpRequests = useRef<AbortController[]>([]);

    const sendRequest = useCallback(
        async (
            url: RequestInfo,
            method: string = 'GET',
            body = null,
            headers = { 'Content-Type': 'application/json' },
        ) => {
            setIsLoading(true);
            const httpAbortController = new AbortController();

            activeHttpRequests.current.push(httpAbortController);

            try {
                const response = await fetch(url, {
                    method,
                    body: JSON.stringify(body),
                    headers,
                    signal: httpAbortController.signal,
                });

                const responseData = await response.json();

                activeHttpRequests.current = activeHttpRequests.current.filter(
                    (reqCtrl) => reqCtrl !== httpAbortController,
                );
                if (!response.ok) {
                    throw new CustomError(responseData.message, response.status);
                }
                setIsLoading(false);
                return responseData;
            } catch (error) {
                setError(error);
                setIsLoading(false);
                throw error;
            }
        },
        [],
    );

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
        };
    }, []);

    return { sendRequest, clearError, isLoading, error };
};
