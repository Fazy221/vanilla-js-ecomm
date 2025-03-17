import products from './api/products.json';
import { cartQuantityToggle } from './cartQuantityToggle';
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
        const productClone = productCartTemplate.content.cloneNode(true);
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        const prodQuant = cartProdFromLs.find((prod) => prod.id === id).quantity;
        productClone.querySelector('.productPrice').textContent =  Number(price* prodQuant);
        productClone.querySelector('.productQuantity').setAttribute('data-quantity', prodQuant.toString());
        productClone.querySelector('.productQuantity').textContent = prodQuant;

        productClone.querySelector('.stockElement').addEventListener('click', (event)=> {
                    cartQuantityToggle(event, id, stock);
        });
        productCartContainer.append(productClone);
    }) 
};
showCartProd();