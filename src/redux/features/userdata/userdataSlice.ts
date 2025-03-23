import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasicUserDataType {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    role: string | null;
}



 const initialState: BasicUserDataType = {
    id: "Cargando ...",
    firstName: "Cargando ...",
    lastName: "Cargando ...",
    email: "Cargando ...",
    role: "Cargando ..."
};

export const userdataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        setBasicUserData: (state, action: PayloadAction<BasicUserDataType>) => {

            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        clearBasicUserData: (state) => {
            state.id = "Sin datos";
            state.firstName = "Sin datos";
            state.lastName = "Sin datos";
            state.email = "Sin datos";
            state.role = "Sin datos";
        },
    },
});

const userdataReducer = userdataSlice.reducer
export const { setBasicUserData, clearBasicUserData } = userdataSlice.actions;
export default userdataReducer;
