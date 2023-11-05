import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/cart.const";

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export function removeToCart(item) {
    return {
        type: REMOVE_TO_CART,
        payload: item
    }
}
