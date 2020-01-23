 
 export function findById (id, arr) {
      return arr.find((item) => {
      return id === item.id
    })
  };



export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
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
         orderTotal += lineTotal;   
    }

    return roundCurrency(orderTotal);
};
