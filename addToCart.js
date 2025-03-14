import { getCartFromLocalStorage } from "./getCartProducts";

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartFromLocalStorage();
    const currCardEl = document.querySelector(`#card${id}`);
    let quantity = currCardEl.querySelector('.productQuantity').innerText;
    let price = currCardEl.querySelector('.productPrice').innerText;
    // console.log(quantity, price);
    price = price.replace('Rs.', '');
    price = Number(price * quantity);
    quantity = Number(quantity);
    // Way 1
    /* let updateCart = {id, quantity, price};
     arrLocalStorageProduct.push(updateCart); */
    // Way 2
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorageProduct));
};