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
    button.value = coffee.id;
    coffeeP.appendChild(button);

    coffeeLi.appendChild(coffeeP);

    return coffeeLi;


}

export default renderCoffee;
    // const ul = document.getElementById('coffee');
    // const coffeeLi = renderCoffee(someCoffee)'
    // ul.appendChild(coffeeLi);
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    