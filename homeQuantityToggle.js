export const homeQuantityToggle = (event, id, stock) => {
    const currCardEl = document.querySelector(`#card${id}`);
    const prodQuantity = currCardEl.querySelector('.productQuantity');
    // console.log(prodQuantity);
    let quantity = parseInt(prodQuantity.getAttribute('data-quantity')) || 1;

    if(event.target.className === 'cartIncrement') {
        if(quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
        }
    }
    if(event.target.className === 'cartDecrement') {
        if(quantity > 1) {
            quantity -= 1;
        } 
    }
    prodQuantity.innerText = quantity;
    prodQuantity.setAttribute('data-quantity', quantity.toString());
    return quantity;
};