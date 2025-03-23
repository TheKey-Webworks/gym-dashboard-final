import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { getBasicUserData } from "../api/authentication";
import { BasicUserDataType, setBasicUserData,  } from "../redux/features/userdata/userdataSlice";
import store from "../redux/store";

// Definimos la estructura de los datos del usuario


// Creamos el contexto con valores predeterminados opcionales
export const UserDataContext = createContext<BasicUserDataType | null>(null);

// Proveedor de contexto para envolver la aplicación
export const UserDataProvider = ({ children }: { children: ReactNode }) => {

    useEffect(() => {
        getBasicUserData()
            .then(data => {
                const typedData = data as BasicUserDataType
                store.dispatch(setBasicUserData(typedData))
            })
            .catch(e => console.error(e))

    }, []);

    return (
        <UserDataContext.Provider value={null}>
            {children}
        </UserDataContext.Provider>
    );
};

// Hook personalizado para acceder al contexto fácilmente
export const useUserData = () => {
    return useContext(UserDataContext);
};
