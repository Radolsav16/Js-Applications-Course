import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'

const id = getItemId()

const editTemplate = (data) => html `
  <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form class="edit-form" @submit = ${onEdit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                .value = ${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                .value = ${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                .value = ${data.category}
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${data.description}</textarea>

              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                .value = ${data.price}
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`


export async function editPageView(){
    const data = await api.get(itemEndpoins.id(id))
    
    render(editTemplate(data),main);
}




async function onEdit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries())
    const name = formData["name"];
    const imageUrl = formData["imageUrl"];
    const category = formData["category"];
    const description = formData["description"];
    const price = formData["price"]

    try{
        await api.put(itemEndpoins.id(id),  {
            name,
            imageUrl, 
            category, 
            description, 
            price
          } 
        );

        page.redirect(`/details/${id}`)
    }catch(err){
        window.alert(err.message);
        return;
    }
}