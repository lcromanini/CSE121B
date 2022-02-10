// main.js
const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }

  function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
      const html = `<li>${currentItem.name}</li>`;
      // note the += here...
      pokeListElement.innerHTML += html;
    });
  }