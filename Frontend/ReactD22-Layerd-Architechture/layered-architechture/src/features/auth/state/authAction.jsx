import {createAsyncThunk} from '@reduxjs/toolkit'
import {api} from '../../../config/api'

const loginUserAction = createAsyncThunk(
    'auth/login', 
    async (credentials, thunkApi) =>{
        try {
            let res = await api.post('/auth/login',credentials)
            localStorage.setItem("accessToken",res.data.accessToken)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue('Login failed')
        }
    }) // takes two arguments  1. is it's name devloper choice name, 2. call Back take two think 2.1 data 2.1 error 

export default loginUserAction