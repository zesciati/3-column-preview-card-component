const pArticle = document.querySelector('.para-article');
const titleArticle = document.querySelector('.title-article');
const infoArticle = document.getElementById("information");
const cancelLearnMore = document.getElementById('x-icon');


cancelLearnMore.addEventListener("click", offFunction);

// Erasing Learn More box
function offFunction() {
  infoArticle.classList.add("hidden");
}

let posts = []; // global variable to hold data

fetch('./data.json')
  // change from json format -> js array format 
  .then(res => res.json())
  // data adalah parsed data  dari json file
  .then(data => {
    // mengubahnya dalam bentuk array
    posts = data;
    // pArticle.textContent = data[0].title; -> Bisa juga tapi togglePass membutuhkan global scope untuk berhasil
  });

function togglePass(id) {
  // clear old content first
  titleArticle.textContent = "";
  pArticle.textContent = "";

  if (id === "sedan") {
    titleArticle.textContent = posts[0].title;
    pArticle.textContent = posts[0].Description;
    infoArticle.classList.remove("hidden");

  } else if (id === "suv") {
    titleArticle.textContent = posts[1].title;
    pArticle.textContent = posts[1].Description;
    infoArticle.classList.remove("hidden");


  } else if (id === "luxury") {
    titleArticle.textContent = posts[2].title;
    pArticle.textContent = posts[2].Description;
    infoArticle.classList.remove("hidden");

  }
}