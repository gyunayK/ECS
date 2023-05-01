import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    total: {
        price: 0,
    },
    status: 'idle',
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const { id, name, price, image } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            
            if (existingItem) {
              existingItem.quantity++;
              state.total.price += price;
            } else {
              state.cart.push({
                id,
                name,
                price,
                image,
                quantity: 1,
              });
              state.total.price += price;
            }
          },
        removeFromCart: (state, action) => {
            const { id, price, quantity } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
            state.total.price -= price;
        },
        clearCart: (state, action) => {
            state.cart = [];
            state.total.price = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
