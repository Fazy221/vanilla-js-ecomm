import { getCartFromLocalStorage } from "./getCartFromLs";
import { updateCartValNav } from "./updateCartValNav";

getCartFromLocalStorage();

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartFromLocalStorage();
    const currCardEl = document.querySelector(`#card${id}`);
    let quantity = currCardEl.querySelector('.productQuantity').innerText;
    let price = currCardEl.querySelector('.productPrice').innerText;
    // console.log(quantity, price);
    price = price.replace('Rs.', '');

    let existingProd = arrLocalStorageProduct.find((prod) => prod.id === id);
    if(existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updateCart = {id, quantity, price};
        // Replace existing product with updated quantity and price
        let arrLSPNoDupl = arrLocalStorageProduct.map((prod) => { 
            return prod.id === id ? updateCart : prod;
        });
        localStorage.setItem('cartProductsLS', JSON.stringify(arrLSPNoDupl));
    }
    if(existingProd) return false;
    price = Number(price * quantity);
    quantity = Number(quantity);
    // Way 1
    /* let updateCart = {id, quantity, price};
     arrLocalStorageProduct.push(updateCart); */
    // Way 2
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorageProduct));
    // Update cart btn value in nav
    updateCartValNav(arrLocalStorageProduct);
};