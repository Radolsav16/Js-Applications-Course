import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { ItemsPoints } from "../service/endpoints.js";
import { requesterApi } from "../service/requester.js";
const main = document.getElementById('main-element');

const marketTemplate = (items) => html`
  <h3 class="heading">Market</h3>
  ${items.length === 0
    ? html` <h3 class="empty">No Items Yet</h3>`
    : html`<section id="dashboard">
        ${items.map(
          (item) => html`
            <div class="item">
              <img src=${item.imageUrl} alt="example1" />
              <h3 class="model">${item.item}</h3>
              <div class="item-info">
                <p class="price">${item.price}</p>
                <p class="availability">
                  ${item.availability}
                </p>
                <p class="type">${item.type}</p>
              </div>
              <a class="details-btn" href="/market/${item._id}">Uncover More</a>
            </div>
          `
        )}
      </section>`}
`;


export async function showMarketView(){
    const data = await requesterApi.get(ItemsPoints.getAll);
   
    
    render(marketTemplate(Array.from(data)),main)

}