function renderCoffee(someCoffee) {
    const coffeeLi = document.createElement('li');
    coffeeLi.className = someCoffee.category;
    coffeeLi.title = someCoffee.description;

    const coffeeH3 = document.createElement('h3');
    coffeeH3.textContent = someCoffee.name;
    coffeeLi.appendChild(coffeeH3);


    const coffeeImg = document.createElement('img');
    coffeeImg.src = '../assets/' + someCoffee.image;
    coffeeImg.alt = someCoffee.image;
    coffeeLi.appendChild(coffeeImg);

    //fix price and button value.
    const coffeeP = document.createElement('p');
    p.className = 'price';

    const usd = '$' + someCoffee.price.toFixed(2);
    coffeeP.textContent = usd;

    const button = document.createElementbyId('button');
    button.textContent = 'Add';
    //button.value = ;
    coffeeP.appendChild(button);

    coffeeLi.appendChild(coffeeP);

    return coffeeLi;


}

export default renderCoffee;
    // const ul = document.getElementById('coffee');
    // const coffeeLi = renderCoffee(someCoffee)'
    // ul.appendChild(coffeeLi);
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    