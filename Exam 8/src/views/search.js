import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { api } from "../service/requester.js";

const motorcycleTemp = (data) => html `
 <div class="motorcycle">
  <img src=${data.imageUrl} alt="example1" />
  <h3 class="model">${data.model}</h3>
    <a class="details-btn" href=${`/details/${data._id}`}>More Info</a>
</div>
  </div>
`;

const searchTemp = (data) => html `
 <section id="search">
<div class="form">
  <h4>Search</h4>
  <form class="search-form" @submit = ${onSearch}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4 id="result-heading">Results:</h4>
  <div class="search-result">
    ${data.length !== 0 ? html `${data.map(obj => motorcycleTemp(obj))}`:html `<h2 class="no-avaliable">No result.</h2>`}
  </div>
        </section>
`;


export function searchPageView(){
    render(searchTemp([]),main)
}




async function onSearch(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const query = formData["search"];

    const url = `http://localhost:3030/data/motorcycles?where=model%20LIKE%20%22${query}%22`;

    try{
        const data = await api.get(url);
        render(searchTemp(data),main)

    }catch(err){
        console.log(err.message);
        
    }
}
