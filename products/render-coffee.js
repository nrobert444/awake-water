// create function to create new fruit
const renderCoffee = (someCoffee) => {
    const coffeeLi = document.createElement('li');
    // add the tree-fruit class
    coffeeLi.classList.add ('coffee-style');
    coffeeLi.title = someCoffee.description;
    const coffeeH3 = document.createElement('h3');
    // add red apple to the header
    coffeeH3.textContent = someCoffee.name;
    const coffeeImg = document.createElement('img');
    // define the image source and alt text
    coffeeImg.src = '../assets/apple.png';
    coffeeImg.alt = someCoffee.image;
    const coffeeP = document.createElement('p');
    coffeeP.classList.add('price');
    coffeeP.textContent = '$1.00'
    // define the Add button
    const button = document.createElementbyId('button');
    button.textContent = 'Add';
    button.value = 'Add';
    // writing those contents to the DOM
    coffeeLi.appendChild(appleH3);
    coffeeLi.appendChild(coffeeImg);
    coffeeLi.appendChild(coffeePrice);
    coffeeP.appendChild(button);
    }
    const ul = document.getElementById('coffee');
    const coffeeLi = renderCoffee(someCoffee)'
    ul.appendChild(coffeeLi);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Message Kyle Devine (he/him)
    
    
    