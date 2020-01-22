import coffee from '../data/coffee.js';
import render-coffee from './render-coffee.js';

const list = document.getElementById('coffee');

for(let i = 0; i < coffee.length; i++) {
    const coffee = coffee[i];
    const dom = render-coffee(coffee);
    list.appendChild(dom);
}