import { combineReducers } from "redux";
import amountReduser from "./amountReduser";
import cartitems from "./cartReduser";
import userRole from "./roleReduser";




const reducerss=combineReducers({
    amount:amountReduser,
    inputarr:cartitems,
    role:userRole,

  


})

export default reducerss