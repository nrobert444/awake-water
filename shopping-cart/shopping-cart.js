import cart from '../data/cart.js';
import renderTable from './render-line-items.js';

const tableBody = document.getElementById('table-generate');

cart.forEach((item) => {
    const dom = renderTable(item);
    tableBody.appendChild(dom);
});

