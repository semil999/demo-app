import { CARTDATA } from "../Type/type"

const initialstate = {
    cartdata : [],
}

const cartReducer = (state = initialstate, action) => {
    switch(action.type){
        case CARTDATA :
            return {
                ...state,
                cartdata : action.data
            }

        default :
            return state
    }
}

export default cartReducer