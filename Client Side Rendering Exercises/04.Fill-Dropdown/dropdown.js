import {render,html} from './node_modules/lit-html/lit-html.js'

const select =document.getElementById('menu');
const form = document.querySelector('form');

form.addEventListener('submit',addItem);



const template = (obj) => html`
    <option>
        ${obj.text}
    </option>

`

// getItems();

async function getItems(){
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    const res = await fetch(url);
    const data = await res.json();

    const dataArr = Object.values(data);
    console.log(dataArr);
    
    

    let html = dataArr.map((obj) => template(obj));
   
    render(html,select)
    
   
    
    
}



function addItem(e) {
   e.preventDefault();
   const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
   const form = e.target;
   const formDate = new FormData(form);
   
   const text = formDate.get('text');
   
   
    fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({text})
    })
    .then(res => res.json())
    .then(data => console.log(data));


     form.reset();

    getItems();
   
   
}
