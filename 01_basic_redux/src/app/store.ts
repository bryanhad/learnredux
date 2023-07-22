import {configureStore} from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'
import {useDispatch} from 'react-redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch
export const useStoreDispatch: () => StoreDispatch = useDispatch