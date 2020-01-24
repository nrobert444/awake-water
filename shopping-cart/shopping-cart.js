import coffee from '../data/coffee.js';
import renderTable from './render-line-items.js';
import { calcOrderTotal, toUSD } from '../common/utils.js';
import { clearCart, getCart } from './cart-api.js';

const tableBody = document.getElementById('table-generate');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const shoppingCart = getCart();

shoppingCart.forEach((item) => {
    const dom = renderTable(item);
    tableBody.appendChild(dom);
});

const orderTotal = calcOrderTotal(shoppingCart, coffee);
orderTotalCell.textContent = toUSD(orderTotal);

if (shoppingCart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        clearCart();
    })
};
