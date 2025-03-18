import { getCartFromLocalStorage } from "./getCartFromLs";
import { updateCartValNav } from "./updateCartValNav";

export const removeFromCart = (id) => {
    let cartProdFromLs = getCartFromLocalStorage();
    let filteredProd = cartProdFromLs.filter((currProd) => {
        return currProd.id !== id;
    });
    localStorage.setItem('cartProductsLS', JSON.stringify(filteredProd));
    let removeCard = document.querySelector(`#card${id}`);
    if(removeCard) removeCard.remove();
    updateCartValNav(cartProdFromLs);
}