import { getCartFromLocalStorage } from "./getCartFromLs";

export const fetchQuanityFromLs = (id, price) => {
    let cartProdFromLs = getCartFromLocalStorage();
    let existingProd = cartProdFromLs.find((currProd) => {
        return currProd.id === id;
    });
    let quantity = 1;
    if(existingProd){
        quantity = existingProd.quantity;
        price = quantity * price;
    }
    return {quantity, price};
};