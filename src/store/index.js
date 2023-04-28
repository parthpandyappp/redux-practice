import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productsReducer } from "../features";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
})

export { store }