 //The code below creates the dropdown type selector, fetches the data from the api and returns a random quote from the relevant tag which displays in the browser.

/*var quoteTypeSelector = ["inspirational", "famous-quotes", "life", "love", "friendship", "wisdom", "technology"];
var quote_result = document.getElementById("quote_result");
var quote_btn = document.getElementById("quote_btn");

quote_btn.addEventListener('click', selectQuote)
function selectQuote() {
    const userChoice = document.getElementById("quote-choice").value;
    getRandomQuote(userChoice);
}
function renderToUser(quote) {
    document.getElementById("quote_result").innerHTML = `<p>${data.results.content}</p>
    <p>${data.results.author}</p>`
}
function getRandomQuote(category) {
    fetch(`https://api.quotable.io/quotes`)
        .then(res => res.json())
        .then(data => {
             renderToUser(data[0])
        }).catch(e => {
        })
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
                    return `<option>${type}</option>`
                })}
            </select>
    `
}
createTagList();*/

         /* fetch('https://api.quotable.io/quotes')
  .then(response => response.json())
  .then(data => {
    console.log(data)
     //quote_result.innerHTML = `${data.results[0].content} <br>
          //  ${data.results[0].author}` 
        })
  */