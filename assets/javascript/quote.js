
/*var quoteTypeSelector = ["inspirational", "famous-quotes", "life", "love", "friendship", "wisdom", "technology"];
var quote_result = document.getElementById("quote_result");
var quote_btn = document.getElementById("quote_btn");

quote_btn.addEventListener('click', selectQuote)
function selectQuote() {
    const userChoice = document.getElementById("quote-choice").value;
    getRandomQuote(userChoice);
}
function renderToUser(data) {
    document.getElementById("quote_result").innerHTML = `<p>${data.content}</p>
    <p>${data.author}</p>`
}
function getRandomQuote(tags) {
    fetch(`https://api.quotable.io/quotes?tags=${tags}`)
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
createTagList(); */

       fetch('https://api.quotable.io/quotes?tags=inspirational')
  .then(response => response.json())
  .then(data => {
    //console.log(`${data.results[0].content} —${data.results[0].author}`)
     quote_result.innerHTML = `${data.results[0].content} <br>
            ${data.results[0].author}` 
        }) 
  