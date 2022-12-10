import { combineReducers } from "redux";
import { cartList, cartNumberProducts } from "./reducer";
const combined = combineReducers({
    cartInfo: cartList,
    amountInfo: cartNumberProducts
})
export { combined }