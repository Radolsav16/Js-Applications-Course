import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'

const editTemplate = (onEdit,data) => html `
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit = ${onEdit}>
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value=${data.brand}
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value = ${data.model}
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value = ${data.release}
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value = ${data.designer}
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value = ${data.value}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`



export async function editPageView(){
    const id = getItemId();
    const data = await api.get(itemEndpoins.id(id));
    console.log(data);
    
    render(editTemplate(onEdit,data),main);
}

async function onEdit(e) {
    e.preventDefault();

    const id = getItemId();


    const formData = Object.fromEntries(new FormData(e.target).entries());

    const brand = formData["brand"];
    const model = formData["model"];
    const  imageUrl = formData["imageUrl"];
    const release = formData["release"];
    const designer = formData["designer"];
    const value = formData["value"];

    if(!brand || !model || !imageUrl || !release || !designer || !value){
            window.alert('Please fill all fields!');
            return;
    }

    try {
        await api.put(itemEndpoins.id(id),{
            brand,
            model, 
            imageUrl, 
            release, 
            designer, 
            value
          });
         page.redirect(`/details/${id}`); 
    }catch(err){
        window.alert(err.message);
        return;
    }

}