import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Userdata {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    role: string | null;
}



const initialState: Userdata = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    role: null
};

export const userdataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Userdata>) => {
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        clearUser: (state) => {
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.role = null;
        },
    },
});

const userdataReducer = userdataSlice.reducer
export const { setUser, clearUser } = userdataSlice.actions;
export default userdataReducer;
