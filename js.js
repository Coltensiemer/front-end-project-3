"use strict"

const mainContainer = document.getElementById('main-container'); 
const thanksContainer = document.getElementById('thankyou-container')
const submitButton = document.getElementById('submit'); 
const rating = document.getElementById('button-rating'); 
const rates= document.querySelectorAll('.button'); 

submitButton.addEventListener('click', () => { 
    thanksContainer.classList.remove('hidden'); 
    mainContainer.style.display= "none"; 
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => { 
        rating.innerHTML = rate.innerHTML;
    } )
    
});





