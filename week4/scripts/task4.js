/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

var me ={
    name:'Luis Romanini',
    photo: 'images/Profile_Picture_Luis.jpg',
    favoriteFoods: ['Lasagna', 'Shrimp', 'Chicken', 'Steak', 'french Fries'],
    hobbies: ['Music','Reading','Bike','Games'],
    placesLived: [
        {
            place:'Campinas, SP',
            length:'1 year'
        },
        {
            place:'Curitiba, PR',
            length:'2 years'
        },
        {
            place:'Brasilia, DF',
            length:'6 years'
        }
    ]
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.getElementById('name').textContent = me.name;
document.getElementById('photo').setAttribute('src', me.photo);
document.getElementById('photo').setAttribute('alt', me.name);


// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//Initially I tried to use getElementById, but it did not return as expected so I changed it to  querySelector  
me.favoriteFoods.forEach((food) => {
    var favoriteFoodItem = document.createElement('li');
    favoriteFoodItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(favoriteFoodItem);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
me.hobbies.forEach((hobbie) =>{
    var favHobbieItem = document.createElement('li');
    favHobbieItem.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(favHobbieItem);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
// This part of the code I had to look the solution. 

me.placesLived.forEach((placeLived) =>{
    var placeLivedItem = document.createElement('dt');
    placeLivedItem.textContent = placeLived.place;
    var placeLivedLength = document.createElement('dd');
    placeLivedLength.textContent = placeLived.length;

    document.querySelector('#places-lived').appendChild(placeLivedItem);
    document.querySelector('#places-lived').appendChild(placeLivedLength);
});



