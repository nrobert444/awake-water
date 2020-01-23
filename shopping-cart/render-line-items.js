//import cart from './data/cart.js';
import coffee from './data/coffee.js';
import { findById } from './common/utils.js';
import { calcLineItem } from '../common/utils.js';


{/* <thead>
    <tr>
      <th>Drink</th>
      <th>Qty</th> 
      <th>Price</th>
      <th>Total</th>
      </tr>
</thead>
<tbody>
    <tr>
      <td>americano</td>
      <td>1</td>
      <td>$3.00</td>
      <td>$3.00</td>
    </tr>
    <tr>
      <td>pour-over</td>
      <td>3</td>
      <td>$3.00</td>
      <td>$9.00</td>
    </tr>
    <tr>
      <td>macchiato</td>
      <td>2</td>
      <td>$4.00</td>
      <td>$8.00</td>
    </tr>
</tbody>
<tfoot>
    <tr>
      <td>Order Total</td>
      <td></td>
      <td></td>
      <td>$20.00</td>
    </tr>
</tfoot>
<table>
<button>Place Order</button>
  */}





function renderTable(cartItem) {
    const item = findById(cartItem.id, coffee);
    const tabRow = document.createElement('tr');
  
    const tabData = document.createElement('td');
    tabData.textContent = item.name;
    tabRow.appendChild(tabData);

    const tablePrice = document.createElement('td');
    tablePrice.textContent = item.price;
    tabRow.appendChild(tablePrice);

    const tabTotal = document.createElement('td');
    tabTotal.textContent = calcLineItem(cartItem.quantity, item.price);
    tabRow.appendChild(tabTotal);
    
    return tabRow;
    // const coffeeP = document.createElement('p');
    // coffeeP.className = 'price';

    // const usd = '$' + someTable.price.toFixed(2);
    // coffeeP.textContent = usd;

    // // const button = document.createElement('button');
    // // button.textContent = 'Place Order';
    // // button.value = coffee.id;
    // // coffeeP.appendChild(button);


}

export default renderTable;



// import coffee from '../data/coffee.js';
// import renderTable from './render-line-items.js';

// const tableBody = document.getElementById('table-generate');

// coffee.forEach((item) => {
//     const dom = renderTable(item);
//     tableBody.appendChild(dom);
// });
