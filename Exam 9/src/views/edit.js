import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { main } from "../elements/elements.js";
import page from "../../node_modules/page/page.mjs";

const id = getItemId();

const editTemplate = (data , onEdit) => html `
    <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form class="edit-form" @submit = ${onEdit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                .value = ${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                .value = ${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                .value = ${data.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${data.description}</textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              .value = ${data.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>

          </section>
`;


export async function editPageView(){
    const data = await api.get(itemEndpoins.id(id));
    console.log(data);
    render(editTemplate(data,onEdit),main)
}

async function onEdit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    const name = formData["name"];
    const imageUrl = formData["imageUrl"];
    const category = formData["category"];
    const description = formData["description"];
    const date = formData["date"];


    if(!name || !imageUrl || !category || !description || !date){
      window.alert('Please fill all fields!')
      return;
    }
   

    try{
        await api.put(itemEndpoins.id(id), {
          name,
          imageUrl, 
          category, 
          description, 
          date
        });

         page.redirect(`/details/${id}`)
    }catch(err){
        console.log(err.message);
        
    }
}