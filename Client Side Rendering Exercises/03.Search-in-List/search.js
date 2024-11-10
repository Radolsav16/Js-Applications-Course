import {html,render} from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const divTown = document.querySelector('#towns')
const input = document.querySelector('#searchText');
const button = document.querySelector('button');

const template = (towns) => html `
   <ul>
      ${towns.map(town => html`
         <li>${town}</li>
      `)}
   </ul>
`


render(template(towns),divTown)
const listOFli = document.querySelectorAll('li');



button.addEventListener('click',search);


function clear(){
   listOFli.forEach((li)=>{
      li.classList.remove('active');
   })
}



function search(e) {
   clear()
   const value = input.value;

   if(value === '') return;
   

   listOFli.forEach((li)=>{
      if(li.textContent.includes(value)){
         li.classList.add('active');
      }
   })

   input.value = '';



   
}

