'use strict'

const mainContainer = document.getElementById('main-container'); 
const thanksContainer = document.getElementById('thankyou-container')
const submitButton = document.getElementById('submit'); 
const rating = document.querySelector('.button').value;
const myRating = document.getElementById('rating'); 
// const form = document.getElementById('buttons-container').value; 


submitButton.addEventListener('click', () => { 
    thanksContainer.classList.remove('hidden'); 
    mainContainer.style.display= "none"; 

})

myRating.textContent = ` You selected ${rating} out of 5`;

 








