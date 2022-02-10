/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(num1, num2){
// Step 2: In the function, return the sum of the parameters number1 and number2
    
    return num1+num2;
}


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

function addNumbers(){
    let addend1 = parseInt(document.getElementById("addend1").value);
    let addend2 = parseInt(document.getElementById("addend2").value);
    let sum = add(addend1,addend2);
    document.getElementById("sum").value =sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

var subtract = function(num1,num2){
    return num1-num2;
}

var subtractNumbers = function(){
    let minuend = parseInt(document.getElementById("minuend").value);
    let subtrahend  = parseInt(document.getElementById("subtrahend").value);
    let difference = subtract(minuend,subtrahend)
    document.getElementById("difference").value = difference;
}
document.getElementById("subtractNumbers").addEventListener('click',subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
var multiply = (num1, num2) => num1*num2;

var multiplyNumbers = () =>{
    let factor1 = parseInt(document.getElementById("factor1").value);
    let factor2 = parseInt(document.getElementById("factor2").value);
    let product  = multiply(factor1,factor2);
    document.getElementById("product").value = product;
}

document.getElementById("multiplyNumbers").addEventListener('click',multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

var divide = (num1,num2) => num1/num2;


var divideNumbers = () =>{
    let dividend = parseInt(document.getElementById("dividend").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let quotient = divide(dividend,divisor);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener('click',divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
var date= new Date();
var currentYear = date.getFullYear();
document.getElementById("year").textContent = currentYear;




/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = arrayNumbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.getElementById("odds").textContent = arrayNumbers.filter(arrayNumbers => arrayNumbers % 2);
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").textContent=arrayNumbers.filter(arrayNumbers => arrayNumbers % 2 ===0)
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
var reducer = (previusValue, currentValue) => previusValue+currentValue;
document.getElementById("sumOfArray").textContent = arrayNumbers.reduce(reducer);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
var map1 = arrayNumbers.map(x => x*2);
document.getElementById("multiplied").textContent = map1;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").textContent = arrayNumbers.map(x => x*2).reduce(reducer);