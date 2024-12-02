import page  from "../../node_modules/page/page.mjs";
import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/ItemEndpoints.js";
import { api } from "../service/requester.js";

const createTemplate = (onCreate) => html `<section id="create">
<h2>Add Motorcycle</h2>
<div class="form">
  <h2>Add Motorcycle</h2>
  <form class="create-form" @submit = ${onCreate}>
    <input
      type="text"
      name="model"
      id="model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="moto-image"
      placeholder="Moto Image"
    />
    <input
    type="number"
    name="year"
    id="year"
    placeholder="Year"
  />
  <input
  type="number"
  name="mileage"
  id="mileage"
  placeholder="mileage"
/>
<input
  type="text"
  name="contact"
  id="contact"
  placeholder="contact"
/>
  <textarea
    id="about"
    name="about"
    placeholder="about"
    rows="10"
    cols="50"
  ></textarea>
    <button type="submit">Add Motorcycle</button>
  </form>
</div>
</section>`


export function createPageView(){
    render(createTemplate(onCreate),main);
}


async function onCreate(e) {
    e.preventDefault();
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
        await api.post(itemEndpoins.normal,{
            model,
            imageUrl, 
            year, 
            mileage,
            contact,
            about
          });

          page.redirect('/dashboard')
    }catch(err){
        console.log(err.message);
        
    }


   
}