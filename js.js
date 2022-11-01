'use strict'

const mainContainer = document.getElementById('main-container'); 
const thanksContainer = document.getElementById('thankyou-container')
const submitButton = document.getElementById('submit'); 
const rating = document.querySelectorAll('.button');  
const myRating = document.getElementById('button-rating'); 


submitButton.addEventListener('click', () => { 
    thanksContainer.classList.remove('hidden'); 
    mainContainer.style.display= "none"; 
})

myRating.textContent = `${rating}`; 










