import page  from "../../node_modules/page/page.mjs";
import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";

const createTemplate = () => html `
<section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form class="create-form" @submit = ${onCreate}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>

              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function  createPageView(){
    render(createTemplate(),main)
}

async function onCreate(e) {
    e.preventDefault()   
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const name = formData["name"];
    const imageUrl = formData["imageUrl"];
    const category = formData["category"];
    const description = formData["description"];
    const price = formData["price"]

    try{
        await api.post(itemEndpoins.normal,  {
            name,
            imageUrl, 
            category, 
            description, 
            price
          } 
        );

        page.redirect('/dashboard')
    }catch(err){
        window.alert(err.message);
        return;
    }

  
}
