import { useState, useRef, useCallback, useEffect } from 'react';

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
            const jsonBody = JSON.stringify(body);

            try {
                const response = await fetch(url, {
                    method,
                    body: jsonBody,
                    headers,
                    signal: httpAbortController.signal,
                });

                const responseData = await response.json();

                activeHttpRequests.current = activeHttpRequests.current.filter(
                    (reqCtrl) => reqCtrl !== httpAbortController,
                );

                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                return responseData;
            } catch (error) {
                setError(error.message);
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
