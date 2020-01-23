// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { calcLineItem, findById, calcOrderTotal } from '../common/utils.js';
import cart from '../data/cart.js';
import coffee from '../data/coffee.js';
const test = QUnit.test;

test('calcLineItems function', (assert) => {  
    const result = calcLineItem(3, 4);
    assert.equal(result, 12);
});
test('findById function', (assert) => {
    const result = findById('macchiato', cart);
    const expected = cart[1];
    assert.equal(result, expected);
});
test('calcOrderTotal function', (assert) => {
    const result = calcOrderTotal(cart, coffee);
    const expected = 62.00;
    assert.equal(result, expected);
});
