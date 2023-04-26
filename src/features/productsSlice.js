import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsLoading: false
}

const productsSlice = createSlice({
    name: "productslice",
    initialState,
    reducers: {
    },
    extraReducers: {}
})

const productsReducer = productsSlice.reducer
export { productsReducer }