import coffee from '../data/coffee.js';
import renderCoffee from './render-coffee.js';

const list = document.getElementById('coffee');

for(let i = 0; i < coffee.length; i++) {
    const coffeeOne = coffee[i];
    const dom = renderCoffee(coffeeOne);
    list.appendChild(dom);
}