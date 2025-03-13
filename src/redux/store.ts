import { configureStore } from '@reduxjs/toolkit'
import userdataReducer from './features/userdata/userdataSlice'

export default configureStore({
    reducer: {
        userdata: userdataReducer
    },
    devTools: true
})