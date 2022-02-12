
// Declaring the variable date to get the current date
const date= new Date();
// Declaring another variable to get the current day
let dayW = date.getDay();
// declaring a variable to display a message on screen
let message1
// If statement to check the day of the week and display a message according to the day. 
if (dayW == 1 || dayW == 2){
    message1='The week has just started!';
}else if (dayW == 3){
    message1='MidWeek. Stay Strong!';    
}else if(dayW == 4 || dayW == 5){
    message1='Almost there. You can do this!';
}else
    message1='Woohoo!  It is the weekend!';



// Using switch to display the current day. This is just like the last week's exercise. 
let message2
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

// getting the element using this method and assigning the message to display
document.getElementById('message1').textContent = message1;
document.getElementById('message2').textContent = message2;


const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector("button");
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

//  I used the week 5 exercise as a template to display a suggested activity list on the screen.
// Declaring the array to hold the information
let suggestionList = [];

/*
Just like last week, the objective of this function is to create some elements on screen according to the information 
inside the json file. In this case, the function will create an element called article and inside this one an h3 element 
to display the list of suggestions. */
const output = (suggestions) =>{
    suggestions.forEach(suggest => {
        let article = document.createElement('article');
        let suggestion = document.createElement('h3');
        suggestion.textContent = suggest.suggestion;
        article.appendChild(suggestion);
        document.querySelector('#suggestions').appendChild(article);
    });


}
 /* I decided to use create this suggestionList.json file and save it inside the project folder. I had 
I had difficulty saving the file on the mocky website. 
Below I just adapted the code for this project. I used the reset and sortBy function 
*/

fetch('js/suggestionList.json')
    .then(response => response.json())
    .then(suggestions => {
        suggestionList = suggestions;
        output(suggestionList);
    });

const reset = () =>{
    document.querySelector('#suggestions').innerHTML = '';
}  

const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'suggestionsAscending':
            output(suggestionList.sort(
                (suggestion1, suggestion2) => {
                    let suggest1 = suggestion1.suggestion.toLowerCase();
                    let suggest2 = suggestion2.suggestion.toLowerCase();
                    if (suggest1 < suggest2) return -1;
                    else if (suggest1 > suggest2) return 1;
                    else return 0;
                }));
            break;
        case 'suggestionsDescending':
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
            output(suggestionList.sort(
                (suggestion1, suggestion2) => 
                suggestion1.suggestion.toLowerCase() > suggestion2.suggestion.toLowerCase() ? 1 : 
                    suggestion2.suggestion.toLowerCase() > suggestion1.suggestion.toLowerCase() ? -1 : 0));
            break;
    }
}

document.querySelector('#sortBy').addEventListener('change', sortBy);


