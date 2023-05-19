import axios from "axios"
import { CARTDATA, SUCCESS } from "../Type/type"

export const getData = () => {
    return async (dispatch) => {
        let response = await fetch("http://localhost:3000/products").then(res => res.json())
        dispatch(getjsondata(response))
    }
}

export const cartApiData = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:3000/cartdata').then(res => {
            dispatch(cartData(res.data))
        })
    }
}

export const cartAddData = (obj) => {
    return async (dispatch) => {
        await axios.post('http://localhost:3000/cartdata/' , obj).then(() => {
            dispatch(cartApiData())
        })            
    }
}
export const cartUpdateData = (obj) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:3000/cartdata/${obj.id}` , obj).then(() => {
            dispatch(cartApiData())
        })            
    }
}

export const cartDeleteData = (id) => {
    return async (dispatch) => {
        axios.delete(`http://localhost:3000/cartdata/${id}`).then(() => {
            dispatch(cartApiData())
        })
    }
}

const cartData = (data) => {
    return {
        type : CARTDATA,
        data : data
    }
}

const getjsondata = (data) => {
    return {
        type : SUCCESS,
        data : data
    }
}