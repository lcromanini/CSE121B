
// Step 1: Declare and initialize a new variable to hold the current date
const date= new Date();
// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let dayW = date.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message1
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayW == 1 || dayW == 2){
    message1='The week has just started!';
}else if (dayW == 3){
    message1='MidWeek. Stay Strong!';    
}else if(dayW == 4 || dayW == 5){
    message1='Almost there. You can do this!';
}else
    message1='Woohoo!  It is the weekend!';



/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(dayW){
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;            
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').textContent = message1;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById('message2').textContent = message2;

const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector("button");
const Dbutton = document.querySelector("#deleteAll")
button.onclick = function () {
	//Prevent user to input empty lines. 
	if(input.value.trim() === "") {
		return;
	}
	let myItem = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myItem;
	listItem.appendChild(listBtn);
	listBtn.style.color = "red";
	listBtn.style.fontWeight = "bold";
	listBtn.textContent = "X";
	list.appendChild(listItem);

	listBtn.onclick = function (e) {
		list.removeChild(listItem);
	};
	input.focus();

};

// function removeAll(){
//     document.getElementsByClassName(".list").innerHTML=" ";
// }
// Dbutton.onclick = removeAll();

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let suggestionList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

const output = (suggestions) =>{
    suggestions.forEach(suggest => {
        // - Creates an HTML <article> element
        let article = document.createElement('article');
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        let suggestion = document.createElement('h3');
        suggestion.textContent = suggest.suggestion;
        // - Creates an HTML <h4> element and add the temple's location property to it
        // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        article.appendChild(suggestion);
        // - Appends the <article> element to the HTML element with an ID of temples
        document.querySelector('#suggestions').appendChild(article);
    });


}
// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples
fetch('js/suggestionList.json')
    .then(response => response.json())
    .then(suggestions => {
        suggestionList = suggestions;
        output(suggestionList);
    });
// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () =>{
    document.querySelector('#suggestions').innerHTML = '';
}  
// Step 9: Declare a function named sortBy that does the following:
const sortBy = () => {
    // - Calls the reset function
    reset();
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'templeNameAscending':
            output(suggestionList.sort(
                (suggestion1, suggestion2) => {
                    let suggest1 = suggestion1.suggestion.toLowerCase();
                    let suggest2 = suggestion2.suggestion.toLowerCase();
                    if (suggest1 < suggest2) return -1;
                    else if (suggest1 > suggest2) return 1;
                    else return 0;
                }));
            break;
        case 'templeNameDescending':
            output(suggestionList.sort(
                (suggestion1, suggestion2) => {
                    let suggest1 = suggestion1.suggestion.toLowerCase();
                    let suggest2 = suggestion2.suggestion.toLowerCase();
                    if (suggest1 > suggest2) return -1;
                    else if (suggest1 < suggest2) return 1;
                    else return 0;
                }));
            break;
        default:
            // using ternary operators
            output(templeList.sort(
                (suggestion1, suggestion2) => 
                suggestion1.suggestion.toLowerCase() > suggestion2.suggestion.toLowerCase() ? 1 : 
                    suggestion2.suggestion.toLowerCase() > suggestion1.suggestion.toLowerCase() ? -1 : 0));
            break;
    }
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);


