import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { itemEndpoins } from "../endpoints/ItemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import page from '../../node_modules/page/page.mjs'
import { api } from "../service/requester.js";
import { main } from "../elements/elements.js";

const editTemp = (data,onEdit) => html `
<section id="edit">
<h2>Edit Motorcycle</h2>
<div class="form">
  <h2>Edit Motorcycle</h2>
  <form class="edit-form" @submit = ${onEdit}>
    <input
      type="text"
      name="model"
      id="model"
      placeholder="Model"
      .value =${data.model}
    />
    <input
      type="text"
      name="imageUrl"
      id="moto-image"
      placeholder="Moto Image"
      .value = ${data.imageUrl}
    />
    <input
    type="number"
    name="year"
    id="year"
    placeholder="Year"
    .value = ${data.year}
  />
  <input
  type="number"
  name="mileage"
  id="mileage"
  placeholder="mileage"
  .value = ${data.mileage}
/>
<input
  type="number"
  name="contact"
  id="contact"
  placeholder="contact"
  .value = ${data.contact}
/>
  <textarea
    id="about"
    name="about"
    placeholder="about"
    rows="10"
    cols="50"
  >${data.about}</textarea>
    <button type="submit">Edit Motorcycle</button>
  </form>
</div>
</section>`


export async function editPageView(){
    const id = getItemId();
    const data = await api.get(itemEndpoins.id(id));
    render(editTemp(data,onEdit),main)
}


async function onEdit(e) {
    e.preventDefault();
    const id = getItemId();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    const model = formData["model"]
    const imageUrl = formData["imageUrl"];
    const year = formData["year"]
    const mileage = formData["mileage"];
    const contact = formData["contact"];
    const about = formData["about"];

    if(!model || !imageUrl || !year || !mileage || !contact || !about){
        window.alert('Please fill all fields!');
        return;
    }

    try{
        await api.put(itemEndpoins.id(id),{
            model,
            imageUrl, 
            year, 
            mileage,
            contact,
            about
          });

          page.redirect(`/details/${id}`)
    }catch(err){
        console.log(err.message);
        
    }


}