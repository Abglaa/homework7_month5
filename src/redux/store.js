import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./productsSlice"
import cartSlice from "./cartSlice.js";

export const store = configureStore({
    reducer: {
        productsReducer: productsSlice,
        cartReducer: cartSlice
    }
})