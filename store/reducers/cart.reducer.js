import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/cart.const";
const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_TO_CART:
            return state.filter((item) => item.id != action.payload.id);
        default:
            return state;
    }
}