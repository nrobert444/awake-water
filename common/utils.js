 
 export function findById (id, arr) {
  let match = null
  arr.forEach((item) => {
    if (id === item.id) {
      match = item
    }
  })
  return match
}

export function toUSD(number) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'

  });
}



export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount).toFixed(2);
};
    
export function roundCurrency(amount) {
       return Math.round(amount * 100) / 100;
};

export function calcOrderTotal(cart, coffee) {
    let orderTotal = 0;
    for (let i= 0; i < cart.length; i++){
        const lineItem = cart[i];
        const findItem = findById(lineItem.id, coffee); 
        const lineTotal = calcLineItem(lineItem.quantity, findItem.price);
         orderTotal += Number(lineTotal);     }

    return roundCurrency(orderTotal);
};
