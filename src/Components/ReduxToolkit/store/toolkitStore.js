import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartData, productData } from '../createSlice/createSlice'

const reducer = combineReducers({
    product : productData,
    cart : cartData.reducer
})

export const toolkitStore = configureStore({
  reducer: reducer,
})