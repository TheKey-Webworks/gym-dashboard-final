import { configureStore } from '@reduxjs/toolkit'
import userdataReducer from './features/userdata/userdataSlice'
import gymBasicUsersdataReducer from './features/userdata/gymUsersBasicData'

const store = configureStore({
    reducer: {
        userdata: userdataReducer,
        gymsData: gymBasicUsersdataReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export default store 