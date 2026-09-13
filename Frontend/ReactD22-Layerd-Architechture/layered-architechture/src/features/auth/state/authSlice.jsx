import {createSlice} from '@reduxjs/toolkit'
import loginUserAction from './authAction';

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,

    // These actions are only for comunicating with ui actions
    reducers:{
        addUser:(state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false; 
        },
        removeUser:(state)=>{
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
        toggleLoading:(state)=>{
            state.isLoading = !state.isLoading;
        }
    },
    // to communication with thunk or external action we need extraReducers
    // in application using this thunk can able to update the state of redux
    // builder means thank action
    extraReducers: (builder)=>{
        builder
        .addCase(loginUserAction.pending, (state, action)=>{
            state.isLoading = true
             
        })
        .addCase(loginUserAction.fulfilled, (state, action)=>{
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticated = true
        })
        .addCase(loginUserAction.rejected, (state, action)=>{
            state.isLoading = false
        })
    }
})

export const {addUser, removeUser, toggleLoading} = authSlice.actions;
export default authSlice.reducer;

