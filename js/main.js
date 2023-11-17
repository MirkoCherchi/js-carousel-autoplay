'use strict';


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
    stopAutoplay();
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


let autoplayStart = 3000;
let autoplay;

function startAutoplay() {
    autoplay = setInterval(() => {
        next.click();
    }, autoplayStart);
}

function stopAutoplay() {
    clearInterval(autoplay);
}


const bottoneStart = document.querySelector('.btn-start');
const bottoneStop = document.querySelector('.btn-stop');

bottoneStart.addEventListener('click', startAutoplay);
bottoneStop.addEventListener('click', stopAutoplay);









    
    
        







