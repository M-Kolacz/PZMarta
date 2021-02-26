import { createContext } from 'react';

export type Token = string | null;
export type UserId = string | null;
export type TokenExpirationDate = Date | null;

export type Login = (token: Token, expirationDate: TokenExpirationDate, userId: UserId) => void;
export type Logout = () => void;

export interface IAuth {
    isLoggedIn: boolean;
    userId: UserId;
    token: Token;
    login: Login;
    logout: Logout;
}

export const AuthContext = createContext<IAuth>({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => {},
    logout: () => {},
});
