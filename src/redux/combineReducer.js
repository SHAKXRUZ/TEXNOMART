import {
    combineReducers
} from "redux";
import {
    cartlar,
    cartsoni
} from "./reducer";
const combined = combineReducers({
    cartInfo: cartlar,
    amountInfo: cartsoni
})
export {
    combined
}