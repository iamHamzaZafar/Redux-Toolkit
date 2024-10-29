// step 1 completed install the redux toolkit and configure the store.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
}) 