//The code below creates the dropdown type selector, fetches the data from the api and returns a random joke from the relevant category which displays in the browser.

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
    <p>${joke.punchline}</p>`
}
async function getRandomJoke(category) {
    fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
        .then(res => res.json())
        .then(data => {
            renderJokeToUser(data[0])
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
createTypeList();


// Lightbox code below 

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}