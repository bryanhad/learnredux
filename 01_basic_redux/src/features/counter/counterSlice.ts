import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action:{payload:number}) => {
            state.count += action.payload
        },
        decrementByAmount: (state, action:{payload:number}) => {
            state.count -= action.payload
        }
    }
})

// if we want to use the slice that we just created, we have to export both the actions inside of the reducers and the whole reducers as well.
// the destructured reducers is for when we use it in some component
export const {increment, decrement, reset, incrementByAmount, decrementByAmount} = counterSlice.actions
// while thee whole reducer is used for the store 
export default counterSlice.reducer 