
const cappuchino = {
    id: 'cappuchino',
    name: 'cappuchino',
    image: 'cappuchino.jpeg',
    description: 'espresso with steamed milk on top',
    category: 'coffee-style',
    price: 4.00
};
const macchiato = {
    id: 'macchiato',
    name: 'macchiato',
    image: 'macchiato.jpeg',
    description: 'espresso with milk foam on top',
    category: 'coffee-style',
    price: 4.00
};
const pourOver = {
    id: 'pour-over',
    name: 'pour-over',
    image: 'pour-over.jpeg',
    description: 'dark roast brewed with chemex',
    category: 'coffee-style',
    price: 3.00
};
const drip = {
    id: 'drip',
    name: 'drip',
    image: 'drip.jpeg',
    description: 'daily house blend coffee',
    category: 'coffee-style',
    price: 2.00
};
const shotInTheDark = {
    id: 'shot-in-the-dark',
    name: 'shot-in-the-dark',
    image: 'shot-dark.jpeg',
    description: 'house blend coffee with a shot of espresso',
    category: 'coffee-style',
    price: 4.00
};
const mocha = {
    id: 'mocha',
    name: 'mocha',
    image: 'mocha.jpeg',
    description: 'espresso and hot milk with Chocolate',
    category: 'coffee-style',
    price: 4.00
};
const americano = {
    id: 'americano',
    name: 'americano',
    image: 'americano.jpeg',
    description: 'espresso over water',
    category: 'coffee-style',
    price: 3.00
};

const coffee = [
    cappuchino,
    macchiato,
    pourOver,
    drip,
    shotInTheDark,
    mocha,
    americano
    ];





// Pages
// The primary focus today is the product page (products). However, you should slot in a simple home page (index.html), which should have a link to the product page.

// You should also have common/main.css used by all pages, as well as a page-specific css page (like products/products.css).

// Product Page
// The goal for today is to generate a list of products from product data.