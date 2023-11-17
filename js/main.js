'use strict';

// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// Svolgimento
// Creiamo un array con le immagini
// Creiamo un addElevenList con 'click' per fare in modo che ci sia un cambio di immagine
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// BONUS 3:
// Al click sulla thumbnail, viene visualizzata l'immagine selezionata;


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',];
const items = document.querySelector('.items');
let currentItem = 0;

for (let i = 0; i < images.length; i++) {

    // creazione item
    const item = document.createElement('div');
    item.classList.add('item');

    if (i === currentItem){
        item.classList.add('active');
    }

    // creazione img
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `img ${i}`;

    item.append(img);
    items.append(item);
    
}

const domItem = document.querySelectorAll('.item');
const thumbnail = document.querySelectorAll('.opacity');
if (currentItem === 0) {
    thumbnail[currentItem].classList.remove('opacity');
}

// esecuzione in avanti

next.addEventListener('click', function(){
    if (currentItem < domItem.length - 1){
        domItem[currentItem].classList.remove('active');
        currentItem++;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
        thumbnail[currentItem - 1].classList.add('opacity');
    
    } else if (currentItem === 4){
        domItem[currentItem].classList.remove('active');
        thumbnail[currentItem].classList.add('opacity')
        currentItem = 0;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
        
    }


})

// esecuzione indietro

prev.addEventListener('click', function(){
    if (currentItem > 0 ){
        domItem[currentItem].classList.remove('active');
        currentItem--;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
        thumbnail[currentItem + 1].classList.add('opacity');
    
    }  else if (currentItem === 0){
        domItem[currentItem].classList.remove('active');
        thumbnail[currentItem].classList.add('opacity')
        currentItem = 4;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
    }
    
})







    
    
        







