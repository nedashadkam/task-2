import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const shoppingBoxSlice = createSlice({
    name : 'shoppingBox',
    initialState,
    reducers : {
        addToShoppingBox : (state,action) => {
            return state.concat([action.payload])
        },
        removeFromShoppingBox : (state,action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }

})

export default shoppingBoxSlice.reducer;
export const {addToShoppingBox,removeFromShoppingBox}  = shoppingBoxSlice.actions;