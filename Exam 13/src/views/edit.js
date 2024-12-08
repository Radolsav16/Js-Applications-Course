import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import page  from "../../node_modules/page/page.mjs";
import { showErrorMessage } from "./notifications.js";

const editTemplate = (data) => html `
<section id="edit">
<div class="form form-item">
  <h2>Edit Offer</h2>
  <form class="edit-form" @submit = ${onEdit}>
    <input type="text" name="model" id="model" placeholder="Drone Model" value = ${data.model} />
    <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL"  value = ${data.imageUrl} />
    <input type="number" name="price" id="price" placeholder="Price" value =${data.price} />
    <input type="number" name="weight" id="weight" placeholder="Weight" value = ${data.weight} />
    <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" value = ${data.phone} />
    <input type="text" name="condition" id="condition" placeholder="Condition" value = ${data.condition} />
    <textarea name="description" id="description" placeholder="Description"> ${data.description} </textarea>
    <button type="submit">Edit</button>
  </form>
</div>
</section>`;


export async function editPageView() {
    const itemId = getItemId();
    const data = await api.get(itemEndpoins.id(itemId));
    
    
    render(editTemplate(data),main);
}


async function onEdit(e) {
    e.preventDefault();

    const id = getItemId();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    const price = formData["price"];
    const model = formData["model"];
    const  imageUrl = formData["imageUrl"];
    const weight = formData["weight"];
    const phone = formData["phone"];
    const description = formData["description"];
    const condition = formData["condition"]

    if(!price || !model || !imageUrl || !weight || !phone || !description || !condition){
        showErrorMessage('Please fill all fields!');
            return;
    }

    try {
        await api.put(itemEndpoins.id(id),{
            model,
            imageUrl, 
            price, 
            condition,
            weight,
            phone,
            description
          });
         page.redirect(`/details/${id}`); 
    }catch(err){
        window.alert(err.message);
        return;
    }
}