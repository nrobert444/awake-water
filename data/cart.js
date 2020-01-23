
const cart = 

[
    {  
        id: 'cappuchino',
        quantity: 1
    },
    {
    
        id: 'macchiato',
        quantity: 3
    
    },
    {
   
        id: 'pour-over',
        quantity: 2
 
    },
    {
        id: 'drip',
        quantity: 4
      
    },
    {
        id: 'shot-in-the-dark',
        quantity: 2
     
    },
    {
        id: 'mocha',
        quantity: 3
       
    },
    {
        id: 'americano',
        quantity: 4
      
    }
];

export default cart;





// Shopping Cart
// The shopping cart data is an array where each object contains the id of the product and quantity ordered.

// Property	Description
// id	product that this line item refers to
// quantity	how many of the product are being ordered
// Shopping Cart Page
// The goal for today is to generate a table with the quantity, product name, and line item total, plus an overall order total for all products in the cart.

// Step 1: Design Cart
// Work out the static design for the cart table. It should show the quantity, product name and line item total on each row. The footer should have the order total.

// Also add a "Place Order" button on the page.

// git add, commit, push!

// Step 2: Cart Data
// In a new JavaScript file, /data/cart.js:

// Write out an array literal that contains object literals for a few items ordered in the cart (see in class example).
// Export this array as the default export.
// git add, commit, push!

// Step 3: TDD findById Function
// TDD test in /test/utils.js for a function that lives in /common/utils.js called findById. This function takes an array and an id, and returns the first item found that has an .id property that matches the passed in id. It can return null if no match is found.

// Step 4: TDD calcLineItem Function
// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcLineItem. This function takes quantity and an amount and returns the total. Due to how JavaScript uses floating point numbers, you may need to round the result to two decimal places using: Math.round(amount * 100) / 100

// Step 5: DOM Render Function
// Write a function that lives in /shopping-cart/render-line-items.js. This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example:

// Copy html from the page
// You will need to remove extraneous whitespace. Don't worry, you can adjust the test as need
// Copy the cart line item data for the one that corresponds to the example, and either copy the product or use your findById function to locate the product and use as your input to your function
// Using the DOM API, create your static example programmatically using JavaScript. Start by creating the top level element (<tr> for the line item)
// git add, commit, push!

// Step 4: Generate Shopping Cart
// In your /shopping-cart/shopping-cart.js, you will need to:

// Import your data (both cart and products), DOM generation function, and any needed utility functions
// locate the tbody element where your line items will go
// loop through your data
// Create a variable based on the current array index.
// Use your findById function to find the corresponding product for this line item
// Pass these to your DOM generation function and capture result in variable
// Append to the table body (tbody)
// git add, commit, push!

// Step 5: TDD CalcOrderTotal
// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcOrderItem. This function takes the cart array and products array. Calculate the total of your cart data as the expected value.

// In the function:

// Create a variable to hold the order total.
// Loop the line items and use the calcLineItem function to calculate each line item and add it to the order total.
// Return the order total
// Note: you may need to round the order total to get your test to pass like you did with the line item total
// Step 6: Add Order Total to Table
// In /shopping-cart/shopping-cart.js:

// import the calcOrderTotal function
// Use the function to calculate the cart total and display the result in the appropriate element