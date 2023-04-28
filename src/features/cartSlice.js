import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartLoading: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        incrementOrderQty: (state, action) => {
            const { id } = action.payload;
            const orderIndex = state.cart.findIndex(
                (order) => order.id === id
            );
            if (orderIndex !== -1) {
                state.cart[orderIndex].qty += 1;
            }
        },
        decrementOrderQty: (state, action) => {
            const { id } = action.payload;
            const orderIndex = state.cart.findIndex(
                (order) => order.id === id
            );
            if (orderIndex !== -1) {
                state.cart[orderIndex].qty -= 1;
                if (state.cart[orderIndex].qty < 1) {
                    state.cart.splice(orderIndex, 1);
                }
            }
        },
        placeOrder: (state) => {
            state.cart = []
        }
    },

})

export const { addToCart, incrementOrderQty, decrementOrderQty, placeOrder } = cartSlice.actions
const cartReducer = cartSlice.reducer
export { cartReducer }