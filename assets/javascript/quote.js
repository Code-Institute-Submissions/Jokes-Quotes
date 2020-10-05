
/* The code below creates the dropdown quote-type selector on the homepage, fetches the data from the api and returns a random quote from the relevant tag which displays in the browser.
    The data from this quote api identifies the quote types by tags rather than by category. 

The exact steps are as follows:

 1. The user clicks on the (Inspire me!) quote button and the event listener calls the createTagList function.
 2. The createTagList function creates the select dropdown using the quote tags defined in the quoteTypeSelector variable. 
 3. The user selects an option from the dropdown such as inspirational or famous quotes etc. 
 4. This fires the onchange event and calls the selectedData function.
 5. The selectedData function will call the getRandomQuote function and pass in the user's choice.
 6. The getRandomQuote function will use the user's choice to determine which quote-tag endpoint to call and return the data from the api.
 7. Finally, the random quote is displayed to the user via the renderQuoteToUser function.
 */


let quoteTypeSelector = ["inspirational", "famous-quotes", "life", "love", "friendship", "wisdom", "technology"];
let quote_result = document.getElementById("quote_result");
let quote_btn = document.getElementById("quote_btn");


quote_btn.addEventListener('click', selectQuote);

function selectQuote() {
    const userChoice = document.getElementById("quote-choice").value;
    getRandomQuote(userChoice);
}

function renderQuoteToUser(data) {
    document.getElementById("quote_result").innerHTML = `<p>${data.content}</p>
    <p>${data.author}</p>`;
}

function getRandomQuote(tags) {
    fetch(`https://api.quotable.io/quotes?tags=${tags}`)
        .then(res => res.json())
        .then(data => {
            renderQuoteToUser(
                data.results[Math.floor(Math.random() * data.results.length)]);
        }).catch(err => {
            alert("Our apologies, there was an error accessing the quotes data, please refresh the page and try again.");
        });
}

function selectedData(element) {
    const userChoice = element.value;
    getRandomQuote(userChoice);
}

function createTagList(data) {
    document.getElementById("quote-type").innerHTML = `
        <select id="quote-choice" class="custom-select custom-select-sm">
                <option>Select a quote type</option>
                ${quoteTypeSelector.map(function (type) {
                    return `<option>${type}</option>`;
                })}
            </select>
    `;
}
createTagList();