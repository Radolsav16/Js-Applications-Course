import { html, render } from "lit-html";
import { main } from "../elements/elements";
import { api } from "../service/requester";
import { itemEndpoins } from "../endpoints/itemEndpoints";
import page from "page";

const createTemplate = () => html` <section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form class="create-form" @submit = ${onCreate}>
      <input type="text" name="category" id="category" placeholder="Category" />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`;

export function createPageView() {
  render(createTemplate(), main);
}


async function onCreate(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const category = formData["category"];
    const imageUrl = formData["image-url"];
    const description = formData["description"];
    const moreInfo = formData["additional-info"];

    try{
        await api.post(itemEndpoins.normal,{
            category,
            imageUrl, 
            description, 
            moreInfo
          });

          page.redirect('/dashboard');
    }catch(err){
        console.log(err.message);
        
    }
}