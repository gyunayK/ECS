import { combineReducers } from 'redux'
import storeSlice from './storeSlice'

export const rootReducer = combineReducers({
    store: storeSlice

})