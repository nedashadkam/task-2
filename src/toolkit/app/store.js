import { configureStore } from "@reduxjs/toolkit";
import shoppingBoxReducer from '../features/shoppingBoxSlice';

const store = configureStore({
    reducer : {
        shoppingBoxItems : shoppingBoxReducer
    }
})

export default store ;