import { getCartFromLocalStorage } from "./getCartFromLs";

export const cartQuantityToggle = (event, id, stock,) => {
    let cartProdFromLs = getCartFromLocalStorage();
    const currCardEl = document.querySelector(`#card${id}`);
    const prodQuantity = currCardEl.querySelector('.productQuantity');
    const prodPrice = currCardEl.querySelector('.productPrice');
    let quantity = parseInt(prodQuantity.getAttribute('data-quantity')) || 1;
    let price = Number(prodPrice.innerText); 
    if(event.target.className === 'cartIncrement') {
        if(quantity < stock) {
            quantity += 1; 
            price *= 2; 
        } else if (quantity === stock) {
            quantity = stock;
            price = stock*price;
        }
    }
    if(event.target.className === 'cartDecrement') {
        if(quantity > 1) {
            quantity -= 1;
            price/= 2;
        }  
    }
    prodQuantity.innerText = quantity;
    prodQuantity.setAttribute('data-quantity', quantity.toString());
    prodPrice.innerText = price.toFixed(2);
    let updateCart = {id, quantity, price};
    let arrLSPNoDupl = cartProdFromLs.map((prod) => { 
        return prod.id === id ? updateCart : prod;
    });
    localStorage.setItem('cartProductsLS', JSON.stringify(arrLSPNoDupl));
};