
import { render,html } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
form.addEventListener('submit',addUl);

const root = document.querySelector('#root');

function addUl(e){
    e.preventDefault();
    const form = e.target;
    const formDate = Object.fromEntries(new FormData(form).entries());


   
    const towns = formDate.towns.split(', ');
  
    

    const template = (towns => html `
        <ul>
            ${towns.map(town => html`<li>${town}</li>`)}
        </ul>
        
    `);


   render(template(towns),root)   
   form.reset();  


   
}


