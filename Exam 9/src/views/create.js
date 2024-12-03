import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { api } from "../service/requester.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import page from "../../node_modules/page/page.mjs";

const createTemplate = () => html`
      <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form class="create-form" @submit = ${onCreate}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function createPageView() {
  render(createTemplate(), main);
}


async function onCreate(e) {
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
        await api.post(itemEndpoins.normal,{
          name,
          imageUrl, 
          category, 
          description, 
          date
        });

          page.redirect('/dashboard');
    }catch(err){
        console.log(err.message);
        
    }
}