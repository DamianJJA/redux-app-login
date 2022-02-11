import { combineReducers } from "redux";
import { buscador } from "./buscadorReducer";
import { game_reducer } from "./gameShopReducer";
import { price_reducer } from "./priceReducer";

export const rootReducers = combineReducers({
    game_reducer,
    buscador,
    price_reducer
});