import { configureStore } from '@reduxjs/toolkit'
import userdataReducer from './features/userdata/userdataSlice'

const store = configureStore({
    reducer: {
        userdata: userdataReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export default store 