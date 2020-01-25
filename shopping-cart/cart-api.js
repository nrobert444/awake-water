import { findById } from '../common/utils.js';

export function clearCart() {
    localStorage.removeItem('CART');
    window.location = '../';
};

export function getCart() {
    const createCart = localStorage.getItem('CART');
    let shopCart;
    if (createCart) {
        shopCart = JSON.parse(createCart);
    } else {
        shopCart =[];
    }
    return shopCart;
};

export function addItem(shoppingCart, someCoffee) {
    let lineItem = findById(someCoffee, shoppingCart);

    if (!lineItem) {
        lineItem = {
            id: someCoffee,
            quantity: 1
        };
        shoppingCart.push(lineItem);
    }
    else {
        lineItem.quantity++;
    };
    const newCart = JSON.stringify(shoppingCart);
    localStorage.setItem('CART', newCart);
};
