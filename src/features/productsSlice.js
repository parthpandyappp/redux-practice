import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsLoading: false
}

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68",
        })
        return res.data
    } catch (error) {
        console.log(alert)
    }
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.productsLoading = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.products = action.payload
            state.productsLoading = false
        }
    }
})

const productsReducer = productsSlice.reducer
export { productsReducer }