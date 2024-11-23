import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { casualRender } from "../middewares/middleware.js";
import { ItemsPoints } from "../service/endpoints.js";
import { requesterApi } from "../service/requester.js";
import { showErrorMessage } from "../middewares/errorMessage.js";




const createItemTemplate = () => html `
    <section id="create">
          <div class="form form-item">
            <h2>Share Your item</h2>
            <form class="create-form" @submit = ${onCreation}>
              <input type="text" name="item" id="item" placeholder="Item" />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`



export function showSellView(){
    casualRender(createItemTemplate);
}


async function onCreation(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    
    for(let keys in formData){
        if(formData[keys] === ''){
           showErrorMessage('Please fill all fields!');
           return;
        }
    };
        
        const result = await requesterApi.post(ItemsPoints.addItem,formData);
    
        page.redirect('/market');
}