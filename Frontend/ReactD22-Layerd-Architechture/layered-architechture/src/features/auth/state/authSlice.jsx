import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,
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
    }
})

export const {addUser, removeUser, toggleLoading} = authSlice.actions;
export default authSlice.reducer;

