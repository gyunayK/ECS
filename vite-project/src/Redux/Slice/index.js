import { combineReducers } from 'redux'
import storeSlice from './storeSlice'
import cartSlice from './cartSlice'
import userSlice from './userSlice'

export const rootReducer = combineReducers({
    store: storeSlice,
    cart: cartSlice,
    user: userSlice

})