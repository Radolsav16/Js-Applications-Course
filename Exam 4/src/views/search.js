import {html , render } from '../../node_modules/lit-html/lit-html.js'
import { main } from '../service/elements.js'
import { ItemsPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';
import  page from '../../node_modules/page/page.mjs'

const showTemplate = (data) => html`
<div class="show">
    <img src=${data.imageUrl} alt="example1" />
    <div class="show">
      <h3 class="title">${data.title}</h3>
      <p class="genre">${data.genre}</p>
      <p class="country-of-origin">${data.country}</p>
      <a class="details-btn" href=${`details/${data.id}`}>Details</a>
    </div>
  </div>
  </div>
`;

const searchTemplate = (data,onSearch) => html `
    <section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form" @submit = ${onSearch}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
    
  ${data.length === 0  ? html `<p>There is no TV show with this title.</p>` : html `${data.map(show => showTemplate(show))}`}

</div>

    </section>
`;


export function searchPageView(ctx,next){
    render(searchTemplate([],onSearch),main);
}



async function onSearch(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const query = formData["search"];

    const divResult = document.querySelector('.search-result');

    const data = await api.get(ItemsPoints.filter(query));

    
    
  


    render(searchTemplate(data,onSearch),main)
   

    
    
}



