import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getBasicUserData, getLoginStatus } from "../api/authentication";
import store from "../redux/store";
import { setUser } from "../redux/features/userdata/userdataSlice";

// Definir la forma del contexto
interface AuthContextType {
    isAuthenticated: boolean;
    authChecked: boolean;
}

// Crear el contexto con un valor inicial
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Definir las props del proveedor
interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [authChecked, setAuthChecked] = useState<boolean>(false)

    useEffect(function () {
        getLoginStatus()

            .then(async function (d) {
                setIsAuthenticated(d.isAuthenticated)
                const userData = await getBasicUserData()
                store.dispatch(setUser({ ...userData }))
            })

            .finally(function () {
                setAuthChecked(true)
            })
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, authChecked }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
export default AuthProvider;
