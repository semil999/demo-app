import axios from "axios";
import { getCartApi } from "../createSlice/createSlice";

export const getcartdata = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:3000/cartdata').then(res => {
            return dispatch(getCartApi(res.data))
        })
    }
}

export const addcartdata = (obj) => {
    return async (dispatch) => {
        await axios.post('http://localhost:3000/cartdata/' , obj).then(() => {
            return dispatch(getcartdata())
        })
    }
}

export const updatecartdata = (obj) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:3000/cartdata/${obj.id}` , obj).then(() => {
            return dispatch(getcartdata())
        })
    }
}

export const deletecartdata = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:3000/cartdata/${id}`).then(() => {
            return dispatch(getcartdata())
        })
    }
}