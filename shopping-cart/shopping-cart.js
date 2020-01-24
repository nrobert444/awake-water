import coffee from '../data/coffee.js';
import renderTable from './render-line-items.js';
import { calcOrderTotal } from '../common/utils.js';

const tableBody = document.getElementById('table-generate');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const getCart = localStorage.getItem('CART');
let shopCart;
if (getCart) {
    shopCart = JSON.parse(getCart);
}
else {
    shopCart = [];
}

shopCart.forEach((item) => {
    const dom = renderTable(item);
    tableBody.appendChild(dom);
});


const orderTotal = calcOrderTotal(shopCart, coffee);
orderTotalCell.textContent = orderTotal;

if (shopCart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        window.location = '../';
    });
}
