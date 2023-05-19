import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductApi = createAsyncThunk(
    'product',
    async () => {
        const respons = await axios.get('http://localhost:3000/products')
        return respons.data
    }
)

export const productData = createSlice({
    name : 'product',
    initialState : {
        product : []
    },
    reducers : {
        
    },
    // extraReducers : {
    //     [getProductApi.fulfilled] : (state , action) => {
    //         state.product = action.payload
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(getProductApi.fulfilled, (state, action) => {
          state.product = action.payload
        })
      }
}).reducer

export const cartData = createSlice({
    name : 'cart',
    initialState : {
        cart : []
    },
    reducers : {
        getCartApi(state , action){
            return {cart : action.payload}
        }
    }
})

export const { getCartApi } = cartData.actions