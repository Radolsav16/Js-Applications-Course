import { html , render } from "lit-html";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { main } from "../elements/elements.js";
import page from "page";

const id = getItemId();

const editTemplate = (data , onEdit) => html `
      <section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form class="edit-form" @submit = ${onEdit}>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              .value = ${data.category}
            />
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
            rows="10"
            cols="50"
          >${data.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          >${data.moreInfo}</textarea>
              <button type="submit">Post</button>
            </form>
          </div>
</section>
`;


export async function editPageView(){
    const data = await api.get(itemEndpoins.id(id));
    render(editTemplate(data,onEdit),main)
}

async function onEdit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const category = formData["category"];
    const imageUrl = formData["image-url"];
    const description = formData["description"];
    const moreInfo = formData["additional-info"];

    try{
        await api.put(itemEndpoins.id(id),{
            category,
            imageUrl, 
            description, 
            moreInfo
          });

         page.redirect(`/details/${id}`)
    }catch(err){
        console.log(err.message);
        
    }
}