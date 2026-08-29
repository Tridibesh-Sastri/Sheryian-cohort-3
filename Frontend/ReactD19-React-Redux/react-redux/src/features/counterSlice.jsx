import {createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name : "counter",
    initialState : { count: 0 },
    reducers : {
        increment : (state, action) => {
            console.log("action->", action);
            state.count++;
        },
        decrement : (state) => {
            state.count--;
        }
    }

    // reducers: {
    //     increment: (state) => {
    //       // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //       // doesn't actually mutate the state because it uses the Immer library,
    //       // which detects changes to a "draft state" and produces a brand new
    //       // immutable state based off those changes
    //       state.value += 1
    //     },
    //     decrement: (state) => {
    //       state.value -= 1
    //     }
    // }
})


console.log("slice->", counterSlice);

export const {increment , decrement} = counterSlice.actions

export default counterSlice.reducer;