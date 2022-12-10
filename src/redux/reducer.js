const initialState = {
    cardData: []
}
const cartList = (state = [], action) => {
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

const cartNumberProducts = (state = initialState, action) => {
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
    cartList,
    cartNumberProducts
}