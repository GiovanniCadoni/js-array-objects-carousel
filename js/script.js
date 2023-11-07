//Dichiarazione e inizializzazione delle variabili
const images = [
    {
        link: "./img/01.webp",
        name: "Spider-Man Miles Morales",
        description: "A war for control of Marvel's New York has broken out between a devious energy corporation and a high-tech criminal army." 
    },
    {
        link: "./img/02.webp",
        name: "Ratchet & Clank: Rift Apart",
        description: "The intergalactic adventurers are back with a bang in Ratchet & Clank: Rift Apart!",
    },
    {
        link: "./img/03.webp",
        name: "Fortnite",
        description: "Fortnite is a third-person shooter game where up to 100 players compete to be the last person or team standing."
    },
    {
        link: "./img/04.webp",
        name: "Stray",
        description: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city."
    },
    { 
        link: "./img/05.webp",
        name: "Marvel's Avengers",
        description: "Marvel's Avengers is a third-person, action-adventure game. It features an original story with single-player and co-operative gameplay."
    },
];
console.log(images);

const imgCarousel = document.querySelector(".items");
console.log(imgCarousel);

let imgString = "";

//Ciclo per inserire le varie classi nella nostra stringa
for (let i = 0; i < images.length; i++)
{
    const curImg = images[i];
    imgString += `
    <div class="item"> 
        <img class="banner" src="${curImg.link}" alt="">
        <h2 class="title">
            ${curImg.name}
        </h2>
        <p class="info">
            ${curImg.description}
        </p>
    </div>`;
}

//Aggiunta dei bottoni
imgString += `<div id="preview" class="prev"></div>`;
imgString += `<div id="next" class="next"></div>`;
console.log(imgString);

//Inserimento della stringa nel file Html
imgCarousel.innerHTML = imgString;

//Assegniamo ad ogni classe che contiene la singola immagine una nostra variabile
const imgSlide = document.querySelectorAll(".item");
console.log(imgSlide);

//Partiamo dalla prima classe, nonchè la prima immagine
let currentSlideIndex = 0;
imgSlide[currentSlideIndex].classList.add("active");

//E infine occupiamoci del poter scorrere le immagini tramite i bottoni
document.getElementById("next").addEventListener("click", function ()
{
    if(currentSlideIndex < imgSlide.length - 1)
    {
        imgSlide[currentSlideIndex].classList.remove("active");
        currentSlideIndex++;
        imgSlide[currentSlideIndex].classList.add("active");
    } else if (currentSlideIndex === imgSlide.length -1 )
    {
        imgSlide[currentSlideIndex].classList.remove("active");
        currentSlideIndex = 0;
        imgSlide[currentSlideIndex].classList.add("active");
    }
})

document.getElementById("preview").addEventListener("click", function ()
{
    if(currentSlideIndex > 0)
    {
        imgSlide[currentSlideIndex].classList.remove("active");
        currentSlideIndex--;
        imgSlide[currentSlideIndex].classList.add("active");
    } else if (currentSlideIndex === 0)
    {
        imgSlide[currentSlideIndex].classList.remove("active");
        currentSlideIndex = imgSlide.length - 1;
        imgSlide[currentSlideIndex].classList.add("active");
    }
})
