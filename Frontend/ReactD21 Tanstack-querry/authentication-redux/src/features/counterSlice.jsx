import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=> {state.count++}, //actions in side reducers key value pair value can't be arrow function with return statement
        decrement: (state)=> {state.count--}, //actions
        incrementByValue: (state,action)=> {state.count += action.payload}  //actions
    }
})

console.log(counterSlice)
export const {increment, decrement, incrementByValue } = counterSlice.actions

export default counterSlice.reducer