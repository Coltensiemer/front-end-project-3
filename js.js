'use strict'

const mainContainer = document.getElementById('main-container'); 
const thanksContainer = document.getElementById('thankyou-container')
const submitButton = document.getElementById('submit'); 
const rating = document.getElementById('button-rating');
const myRating = document.getElementById('rating');
const form = document.getElementById('buttons-container'); 





const inputvalue = (e) => { 
    e.preventDefault();
    thanksContainer.classList.remove('hidden'); 
    mainContainer.style.display= "none"; 

    let input = document.querySelectorAll('input') // Input values 
for (let i = 0; i <input.length;i++){
    if (input[i].checked ) { rating.innerHTML = input[i].value }} 

    
}; 

submitButton.addEventListener('click', inputvalue); 








 








