import { clear } from "./sectionDisplay.js";

const sectionElement = document.querySelector('#create-section');

const form = sectionElement.querySelector('form');

form.addEventListener('submit',createRecipe);


function createRecipe(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');

 
    const url = 'http://localhost:3030/data/recipes';

    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "X-Authorization": `${localStorage.getItem('token')}`
        },
        body:JSON.stringify(data)
    })

    .then(res => res.json())
    .then(data => {
        location.href = '/';

     
    })
    .catch(err => console.log(err));
  
}

export function makeRecipe(){
    clear()
    sectionElement.style.display = 'block';
}