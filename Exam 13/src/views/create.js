import page  from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";
import { showErrorMessage } from "./notifications.js";

const createTemplate = onCreate => html `
    <section id="create">
        <div class="form form-item">
          <h2>Add Drone Offer</h2>
          <form class="create-form" @submit = ${onCreate}>
            <input type="text" name="model" id="model" placeholder="Drone Model" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" name="price" id="price" placeholder="Price" />
            <input type="number" name="weight" id="weight" placeholder="Weight" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description"></textarea>
            <button type="submit">Add</button>
          </form>

        </div>
      </section>
`;

export function createPageView(){
    render(createTemplate(onCreate),main)
}


async function onCreate(e) {
    e.preventDefault();
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
        await api.post(itemEndpoins.normal,{
            model,
            imageUrl, 
            price, 
            condition,
            weight,
            phone,
            description
          });
         page.redirect('/dashboard'); 
    }catch(err){
        window.alert(err.message);
        return;
    }
}