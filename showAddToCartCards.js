import products from './api/products.json';
import { fetchQuanityFromLs } from './fetchQuanityFromLs';
import { getCartFromLocalStorage } from "./getCartFromLs";

let cartProdFromLs = getCartFromLocalStorage();
let filteredProd = products.filter((currProd) => {
    return cartProdFromLs.some((currCartProdFromLs) => currCartProdFromLs.id === currProd.id);
});

const productCartContainer = document.querySelector('#productCartContainer');
const productCartTemplate = document.querySelector('#productCartTemplate');

const showCartProd = () => {
    filteredProd.forEach((currFilteredProd) => {
        const {id, category, image, name, price, stock} = currFilteredProd;
        let productClone = document.importNode(productCartTemplate.content, true);
        const lsActualData = fetchQuanityFromLs(id, price);
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productPrice').textContent = lsActualData.price;
        productClone.querySelector('.productQuantity').textContent = lsActualData.quantity;
        productClone.querySelector('.productQuantity').setAttribute('data-quantity', lsActualData.quantity.toString());
        productCartContainer.append(productClone);
    }) 
};
showCartProd();