import coffee from '../data/coffee.js';
import {calcOrderTotal , findById, calcLineItem } from '../common/utils.js';


function renderTable(cartItem) {
    const item = findById(cartItem.id, coffee);
    const tabRow = document.createElement('tr');
  
    const tabData = document.createElement('td');
    tabData.textContent = item.name;
    tabRow.appendChild(tabData);

    const tabQuantity = document.createElement('td');
    tabQuantity.textContent = cartItem.quantity;
    tabRow.appendChild(tabQuantity);

    const tablePrice = document.createElement('td');
    tablePrice.textContent = item.price;
    tabRow.appendChild(tablePrice);

    const tabTotal = document.createElement('td');
    tabTotal.textContent = calcLineItem(cartItem.quantity, item.price);
    tabRow.appendChild(tabTotal);

    return tabRow;
};

export default renderTable;

