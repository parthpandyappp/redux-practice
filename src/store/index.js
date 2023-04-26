import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features";

const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})

export { store }