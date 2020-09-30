//The code below creates the dropdown type selector, fetches the data from the api and returns a random joke from the relevant category which displays in the browser.

/*var typeSelector = ["programming", "general", "knock-knock"];
var joke_result = document.getElementById("joke_result");
var joke_btn = document.getElementById("joke_btn");

joke_btn.addEventListener('click', selectJoke);
function selectJoke() {
    const userChoice = document.getElementById("joke-choice").value;
    getRandomJoke(userChoice);
}
function renderToUser(joke) {
    document.getElementById("joke_result").innerHTML = `<p>${joke.setup}</p>
    <p>${joke.punchline}</p>`
}
async function getRandomJoke(category) {
    fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
        .then(res => res.json())
        .then(data => {
            renderToUser(data[0])
        }).catch(err => {
            
        })
}
function selectedData(element) {
    const userChoice = element.value;
    getRandomJoke(userChoice);
}
function createTypeList(data) {
    document.getElementById("type").innerHTML = `
        <select id="joke-choice" class="custom-select custom-select-sm">
                <option>Select a joke type</option>
                ${typeSelector.map(function (type) {
                    return `<option>${type}</option>`
                })}
            </select>
    `
}
createTypeList(); */


