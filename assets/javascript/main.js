
/* The code below creates the dropdown joke-type selector on the homepage, fetches the data from the api and returns a random joke from the relevant category which displays in the browser.

The exact steps are as follows:

 1. The user clicks on the (Gimme some chuckles!) joke button and the event listener calls the createTypeList function.
 2. The createTypeList function creates the select dropdown using the joke categories defined in the typeSelector variable. 
 3. The user selects an option from the dropdown such as programming or knock-knock jokes etc. 
 4. This fires the onchange event and calls the selectedData function.
 5. The selectedData function will call the getRandomJoke function and pass in the user's chosen joke category.
 6. The getRandomJoke function will use the user's choice to determine which category of joke endpoint to call and return the data from the api.
 7. Finally, the random joke from the selected category is displayed to the user via the renderJokeToUser function.
 */

let typeSelector = ["programming", "general", "knock-knock"];
let joke_result = document.getElementById("joke_result");
let joke_btn = document.getElementById("joke_btn");

joke_btn.addEventListener('click', selectJoke);

function selectJoke() {
    const userChoice = document.getElementById("joke-choice").value;
    getRandomJoke(userChoice);
}

function renderJokeToUser(joke) {
    document.getElementById("joke_result").innerHTML = `<p>${joke.setup}</p>
    <p>${joke.punchline}</p>`;
}
//I appropriated some code from this video tutorial on using Javascript and Fetch to return useful data. https://www.youtube.com/watch?v=7f2HNadULOs

async function getRandomJoke(category) {
    fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
        .then(res => res.json())
        .then(data => {
            renderJokeToUser(data[0]);
        }).catch(err => {
            alert("Our apologies, there was an error accessing the jokes data, please refresh the page and try again.");
        });
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
                    return `<option>${type}</option>`;
                })}
            </select>
    `;
}
createTypeList();


// Code below for the lightbox on the homepage was copied from W3 Schools. https://www.w3schools.com/howto/howto_js_lightbox.asp 
// I also used some explanations from here https://www.freecodecamp.org/news/how-to-create-a-lightbox-using-html-css-and-javascript/

//Open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
//Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Next & Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//This function decides which slide will be shown and which of the dots is active.
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

