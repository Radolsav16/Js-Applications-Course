import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { api } from "../service/requester.js";
import { getUserId } from "../service/userService.js";

const isLog = getUserId();

const cardTemplate = (data , isLog) => html `
 <li class="card">
      <img src=${data.imageUrl} alt="travis" />
      <p>
        <strong>Brand: </strong><span class="brand">${data.brand}</span>
      </p>
      <p>
        <strong>Model: </strong
        ><span class="model">${data.model}</span>
      </p>
      <p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
      ${isLog ? html `<a class="details-btn" href=${`/details/${data._id}`}>Details</a>`:html` `}
      
    </li>
`;


const result = (data) => html`
${data.length !== 0 ? html `
<ul class="card-wrapper">
  ${data.map(obj => cardTemplate(obj,isLog))}
   
  </ul>`:html `<h2>There are no results found.</h2>`}
  `;

const searchTemplate = (onSearch) => html `

<section id="search">
<h2>Search by Brand</h2>

<form class="search-wrapper cf" @submit = ${onSearch}>
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button type="submit">Search</button>
</form>

<h3>Results:</h3>

<div id="search-container">
  
</div>
</section>`


export function searchPageView(){
    render(searchTemplate(onSearch),main)
}


async function onSearch(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const search = formData["search"];

    const baseUrl = `http://localhost:3030/data/shoes?where=brand%20LIKE%20%22${search}%22`;

    try{
        const data = await api.get(baseUrl);
        const searchContainer = document.querySelector('#search-container');
        
        render(result(data),searchContainer);
    }catch(err){
        window.alert(err.message);
        return;
    }


}