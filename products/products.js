import coffee from '../data/coffee.js';
import renderCoffee from './render-coffee.js';

const list = document.getElementById('coffee');

for(let i = 0; i < coffee.length; i++) {
    const coffee = coffee[i];
    const dom = renderCoffee(coffee);
    list.appendChild(dom);
}