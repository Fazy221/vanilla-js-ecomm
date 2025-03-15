import './style.css';
import products from './api/products.json';
import { showProductContainer } from './homeProductCards';
import { updateCartValNav } from './updateCartValNav';

// Define a function `showProductContainer` that takes an array of products as input
showProductContainer(products);