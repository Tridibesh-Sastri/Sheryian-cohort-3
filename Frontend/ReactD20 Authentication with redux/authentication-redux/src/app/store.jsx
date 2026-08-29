import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice.jsx'
import authReducer from '../features/authSlice.jsx'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
})

