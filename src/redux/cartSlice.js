import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        products: [],
        amountOfProducts: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
            state.amountOfProducts = state.amountOfProducts + 1
        }
    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer