import { createSlice, isFulfilled } from '@reduxjs/toolkit';
import { fetchProducts } from '@/Redux/middleware/api';

const initialState = {
    products: [],
    status: 'idle',
    error: null
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default storeSlice.reducer