import { updateCartValNav } from "./updateCartValNav";

export const getCartFromLocalStorage = () => {
    let cartProducts = localStorage.getItem("cartProductsLS");
    if(!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    // Update cart btn value in nav
    updateCartValNav(cartProducts);
    return cartProducts;
};