import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definimos la estructura correcta de un usuario de gimnasio
export interface GymUser {
  id: string;        // Ejemplo de propiedad, puedes agregar las propiedades que necesites
  firstName: string;
  lastName: string;
  profilePicture: string;
  // Agrega más propiedades según lo necesites
}
interface GymsData {
  id: string;
}

interface GymUsersState {
  gymUsers: GymUser[];  // Cambiamos la estructura para almacenar una lista de usuarios
}


const initialState: GymUsersState = {
  gymUsers: [],  // Inicializamos con un arreglo vacío
};

export const gymUsersDataSlice = createSlice({
  name: "gymsData",  // Asegúrate de que el nombre sea representativo
  initialState,
  reducers: {
    // Modificamos la acción para almacenar un arreglo de usuarios
    setUsers: (state, action: PayloadAction<GymUser[]>) => {
      state.gymUsers = action.payload;  // Guardamos el arreglo de usuarios en el estado
    },
    clearUsers: (state) => {
      state.gymUsers = [];  // Limpiamos el arreglo de usuarios
    },
  },
});

const gymUsersDataReducer = gymUsersDataSlice.reducer;
export const { setUsers, clearUsers } = gymUsersDataSlice.actions;
export default gymUsersDataReducer;
