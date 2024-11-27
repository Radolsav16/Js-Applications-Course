import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'


const carTemplate = (car) => html `
<div class="car">
              <img src=${car.imageUrl} alt="example1"/>
              <h3 class="model">${car.model}</h3>
              <a class="details-btn" href=${`details/${car._id}`}>More Info</a>
</div>
`;

const searchTemplate = () => html `
 <section id="search">
          <div class="form">
            <h4>Search</h4>
            <form class="search-form" @submit = ${onSearch}>
              <input type="text" name="search" id="search-input" />
              <button class="button-list">Search</button>
            </form>
          </div>
          <div class="search-result">
          <h2 class="no-avaliable">No result.</h2>
          </div>
</section>
`;

export function searchView(){
    render(searchTemplate(),main)
}


async function onSearch(e) {
    e.preventDefault();
    const { search } = Object.fromEntries(new FormData(e.target).entries());
    const searchDiv = document.querySelector('.search-result');


    if(!search ) {
        window.alert('Please fill the field');
        return;
    }

    const url = `http://localhost:3030/data/cars?where=model%20LIKE%20%22${search}%22`;

    
    try{
        const data = await api.get(url);
  

        if(data.length !==  0){
            const noResult = document.querySelector('.no-avaliable');
            noResult.style.display = 'none';
            render(data.map(car => carTemplate(car)),searchDiv)
        }

    }catch(err){
        window.alert(err.message)
    }
}


