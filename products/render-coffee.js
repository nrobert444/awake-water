import { findById }  from "../common/utils.js";

function renderCoffee(someCoffee) {
    const coffeeLi = document.createElement('li');
    coffeeLi.className = someCoffee.category;

    
    const coffeeH3 = document.createElement('h3');
    coffeeH3.textContent = someCoffee.name;
    coffeeLi.appendChild(coffeeH3);
    
    
    const coffeeImg = document.createElement('img');
    coffeeImg.src = '../assets/' + someCoffee.image;
    coffeeImg.alt = someCoffee.image;
    coffeeLi.appendChild(coffeeImg);
    
    const coffeeDesc = document.createElement('h4')
    coffeeDesc.textContent = someCoffee.description;
    coffeeLi.appendChild(coffeeDesc);
    
    const coffeeP = document.createElement('p');
    coffeeP.className = 'price';

    const usd = '$' + someCoffee.price.toFixed(2);
    coffeeP.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    //button.value = someCoffee.id;
    button.addEventListener('click', () => {
        const getCart = localStorage.getItem('CART');
        let shopCart;
        if (getCart) {
            shopCart = JSON.parse(getCart);
        } else {
            shopCart =[];
        }
        let lineItem = findById(someCoffee.id, shopCart);
        if(!lineItem) {
            lineItem = {
                //is this right
                id: someCoffee.id,
                quantity: 1
            };

            shopCart.push(lineItem);
        } else {
            lineItem.quantity++;
        };
        const newCart = JSON.stringify(shopCart);
        localStorage.setItem('CART', newCart);
    })
    coffeeP.appendChild(button);

    coffeeLi.appendChild(coffeeP);

    return coffeeLi;


}

export default renderCoffee;
    // const ul = document.getElementById('coffee');
    // const coffeeLi = renderCoffee(someCoffee)'
    // ul.appendChild(coffeeLi);
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    