import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    data : dataReducer,
    cartdata : cartReducer
})

export default rootReducer