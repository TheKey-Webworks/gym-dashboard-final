import React, { createContext, ReactNode } from "react";

// Definir la forma del contexto
interface GymsDataContextType {
    authChecked: boolean;
}

// Crear el contexto con un valor inicial
const GymsDataContext = createContext<GymsDataContextType | null>(null);

// Definir las props del proveedor
interface GymsDataProviderProps {
    children: ReactNode;
}

const GymsDataProvider: React.FC<GymsDataProviderProps> = ({ children }) => {


    return (
        <GymsDataContext.Provider value={null}>
            {children}
        </GymsDataContext.Provider>
    );
};

export { GymsDataContext, GymsDataProvider };
export default GymsDataProvider;
