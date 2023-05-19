import { SUCCESS } from "../Type/type"

const initialstate = {
    data : []
}

const dataReducer = (state = initialstate , action) => {
    switch(action.type){
        case SUCCESS :
            return {
                ...state,
                data : action.data
            }

        default :
            return state
    }
}

export default dataReducer