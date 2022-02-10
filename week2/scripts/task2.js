/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var Name = 'Luis Romanini';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = Name;

// Step 3: declare and instantiate a variable to hold the current year
var date= new Date();
var currentYear = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
var myPic = 'images/Profile_Picture_Luis.jpg';

// Step 6: copy your image into the "images" folder
// OK

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPic);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var favFoods = ['Lasagna', 'Chicken', 'Steak', 'french Fries'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
var anotherFavFood = 'Shrimp';

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(anotherFavFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods;


