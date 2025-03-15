export const updateCartValNav = (arrLocalStorageProduct) => {
    const cartSumQuantEl = document.querySelector('#cartValue');
    let cartSumQuant = arrLocalStorageProduct.length;
    cartSumQuantEl.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>' + cartSumQuant;
}