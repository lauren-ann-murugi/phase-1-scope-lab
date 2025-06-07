//Declare a variable 
//Use the var keyword
//assign the value

var customerName = "bob";
// access the variable in the global scope
function upperCaseCustomerName() {
 customerName = customerName.toUpperCase();
}

//Write a function
//declare a variable and assign it a value
function setBestCustomer() {
    bestCustomer = 'not bob';
}

//Write a function
//declare a variable and assign it a value

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant variable and assign it a value
const leastFavoriteCustomer = 'not bob';
//Write a function that attempts to change that constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'maybe bob';
}
