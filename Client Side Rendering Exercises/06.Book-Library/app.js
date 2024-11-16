import { render,html } from "./node_modules/lit-html/lit-html.js";
import { templateTable } from "./rendering.js";
import {createBook , deleteBookReq,editBookReq} from "./requests.js";

    

const buttonLoadBooks = document.getElementById('loadBooks');
const form = document.querySelector('#add-form');



buttonLoadBooks.addEventListener('click',showBooks);
form.addEventListener('submit',appendBook);




export async function showBooks(e){
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const res = await fetch(url);
    const data = Object.values(await res.json());

    render(templateTable(data),form)

}


function appendBook(e){
    e.preventDefault();
    const currForm = e.target;
    const book = Object.fromEntries(new FormData(currForm).entries());
    
    for(let key in book){
        if(book[key] === ''){
            return
        }
    }
    
    createBook(book);

    currForm.reset();
    

    showBooks();

    
}















