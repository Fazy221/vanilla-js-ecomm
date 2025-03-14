import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
    if(!products) return false;
    products.forEach((product)=> {
        const {id, name, category, brand, price, stock, description, image} = product;
        // const productClone = document.importNode(productTemplate.content, true);
        const productClone = productTemplate.content.cloneNode(true);
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productPrice').textContent = `Rs.${price}`;
        productClone.querySelector('.productActualPrice').textContent = `Rs.${price * 4}`;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.stockElement').addEventListener('click', (event)=> {
            homeQuantityToggle(event, id, stock);
        });
        productClone.querySelector('.add-to-cart-button').addEventListener('click', (event)=> {
            addToCart(event, id, stock);
        });
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productContainer.append(productClone);
    })
};