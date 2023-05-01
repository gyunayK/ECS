import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

let URL = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(URL)
        return response
    }
)