import { check_price, reduce_price } from "../actions/gameShopAction";

const priceInitial = {
    price: 0
}

export const price_reducer = (state = priceInitial, action) => {
    switch (action.type) {
        case check_price:
            return{
                ...state,
                price: state.price + action.payload
            }
        
        case reduce_price:
            return{
                ...state,
                price: state.price 
            }
    
        default:
            return state;
    }
}