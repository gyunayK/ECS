import { combineReducers } from 'redux'
import storeSlice from './storeSlice'
import cartSlice from './cartSlice'

export const rootReducer = combineReducers({
    store: storeSlice,
    cart: cartSlice

})