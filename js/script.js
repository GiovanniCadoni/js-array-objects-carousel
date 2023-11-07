//Dichiarazione e inizializzazione delle variabili
const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
console.log(images);

const imgCarousel = document.querySelector(".items");
console.log(imgCarousel);

let imgString = "";

//Ciclo per inserire le varie classi nella nostra stringa
for (let i = 0; i < images.length; i++)
{
    const curImg = images[i];
    imgString += `<div class="item"> <img src="${curImg}" alt=""> </div>`;
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
