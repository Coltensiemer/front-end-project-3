'use strict'

const mainContainer = document.getElementById('main-container'); 
const thanksContainer = document.getElementById('thankyou-container')
const submitButton = document.getElementById('submit'); 
const rating = document.querySelector('.button').value;
const myRating = document.getElementById('rating'); 

const form = document.getElementById('buttons-container'); 


submitButton.addEventListener('click', () => { 

    thanksContainer.classList.remove('hidden'); 
    mainContainer.style.display= "none"; 

   
})

form.addEventListener('submit', (e) => { 
e.preventDefault(); 

const data= new FormData()

for(let value of data ){
    console.log(value);

}

 
})





 








