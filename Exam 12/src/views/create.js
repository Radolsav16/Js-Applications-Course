import page  from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";

const createTemplate = onCreate => html `
<section id="create">
<div class="form">
  <h2>Add item</h2>
  <form class="create-form" @submit = ${onCreate}>
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
    />
    <button type="submit">post</button>
  </form>
</div>
</section>`;

export function createPageView(){
    render(createTemplate(onCreate),main)
}


async function onCreate(e) {
    e.preventDefault();
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
        await api.post(itemEndpoins.normal,{
            brand,
            model, 
            imageUrl, 
            release, 
            designer, 
            value
          });
         page.redirect('/dashboard'); 
    }catch(err){
        window.alert(err.message);
        return;
    }
}