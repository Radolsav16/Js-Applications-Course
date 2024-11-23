import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { elemnts } from "../elements.js";
import page from "../../node_modules/page/page.mjs";
import { api } from "../service/requester.js";
import { ItemsPoints } from "../service/endpoints.js";
import { getItemId } from "../service/itemService.js";

const editTemp = (data,onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit tattoo</h2>
      <form class="edit-form" @submit = ${onEdit}>
        <input type="text" name="type" id="type" placeholder="Tattoo Type" .value = ${data.type} />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          .value = ${data.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        >${data.description}</textarea>
        <select id="user-type" name="user-type">
          <option value="" disabled >Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">First Time in Tattoo</option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function editPageView(){
    const data = await api.get(ItemsPoints.idMethod(getItemId()));
    render(editTemp(data,onEdit),elemnts.main);
    doSlection(data.userType);
} 

async function onEdit(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const type = formData["type"];
    const imageUrl = formData["image-url"];
    const description = formData["description"];
    const userType = formData["user-type"];

    if(!type || !imageUrl || !description , !userType ){
        window.alert('Please fill all fields!');
        return;
    }


    const data = await api.put(ItemsPoints.idMethod(getItemId()),{type,imageUrl,description,userType});

    page.redirect(`/details/${getItemId()}`);
    
}


function doSlection(userType){
    const options = Array.from(document.querySelectorAll('option'));

    options.find(option => option.textContent === userType).setAttribute('selected','selected');

}