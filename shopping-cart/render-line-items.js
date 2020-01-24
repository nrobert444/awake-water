import coffee from '../data/coffee.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';


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
    
    const tabOrderTotal = document.createElement('td');
    tabOrderTotal.textContent = calcOrderTotal(cartItem.quantity, item.price);
    tabRow.appendChild(tabOrderTotal);

    return tabRow;
};

export default renderTable;

