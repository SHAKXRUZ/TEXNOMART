const initialState = {
    cardData: []
}
const cartlar = (state = [], action) => {
    switch (action.type) {
        case "CART":
            return [
                ...state,
                {
                    cardData: action.info
                }
            ]
        default:
            return state
    }
}
const initialNumberState = {
    number: 0
}
const cartsoni = (state = initialState, action) => {
    switch (action.type) {
        case "CART":
            return {
                products: action.number,
                    infoState: action.state
            }
            default:
                return initialNumberState
    }
}
export {
    cartlar,
    cartsoni
}