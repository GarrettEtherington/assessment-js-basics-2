///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((accum, cart) => accum + cart.price, 0) 
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal + tax * cartTotal - couponValue
}

console.log(calcFinalPrice)
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    if i was a resturaunt databse i'd have my customers names, address, payment information, and phone number
    obviously a name would simply be a string, the address would also be a string due to the combination of numbers and letters. There can be a decent ammount when it comes to payment information so it's be best to fit that all in one array, wearas a phone number would be a string, again, due to the combination of numbers and characters.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const consumorr = {
    name: `Waltuh White`,
    address: `308 Negra Arroyo Lane`,
    paymentInfo: [`that weed card`, 110.65, [`a couple favors`, `blackmail`], `$45 in account`],
    phoneNumber: `(833) 975-1455`
}
