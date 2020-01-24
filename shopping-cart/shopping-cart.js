import cart from '../data/cart.js';
import coffee from '../data/coffee.js';
import renderTable from './render-line-items.js';
import { calcOrderTotal } from '../common/utils.js';

const tableBody = document.getElementById('table-generate');
const orderTotalCell = document.getElementById('order-total-cell');


cart.forEach((item) => {
    const dom = renderTable(item);
    tableBody.appendChild(dom);
});

const orderTotal = calcOrderTotal(cart, coffee);
orderTotalCell.textContent = orderTotal;