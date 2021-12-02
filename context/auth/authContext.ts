import { createContext, Dispatch, SetStateAction } from "react";

export type AuthData = {
    expirationDate: string;
    accessToken: string;
    refreshToken: string;
    userId: string;
};

export type AuthContextValue = {
    authData: AuthData | null; 
    setAuthData?: Dispatch<SetStateAction<AuthData | null>>;
};

export default createContext<AuthContextValue>({ authData: null });