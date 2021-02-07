import { useState, useCallback, useEffect } from 'react';

import { Login, Logout, Token, TokenExpirationDate, UserId } from '../../context/auth-context';

let logoutTimer: NodeJS.Timeout;

export const useAuth = () => {
    const [token, setToken] = useState<Token>(null);
    const [tokenExpirationDate, setTokenExpirationDate] = useState<TokenExpirationDate>(null);
    const [userId, setUserId] = useState<UserId>(null);

    const login: Login = useCallback((token, expirationDate, userId) => {
        setToken(token);
        setUserId(userId);

        const tokenExpirationDate: Date =
            expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

        localStorage.setItem(
            'user',
            JSON.stringify({ userId, token, expiration: tokenExpirationDate.toISOString() }),
        );
    }, []);

    const logout: Logout = useCallback(() => {
        setToken(null);
        setTokenExpirationDate(null);
        setUserId(null);
        localStorage.removeItem('user');
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user')!);
        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.token, new Date(storedData.expiration), storedData.userId);
        }
    }, [login]);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);

    return { token, login, logout, userId };
};
