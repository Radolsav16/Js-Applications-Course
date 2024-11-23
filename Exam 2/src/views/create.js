import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { elemnts } from "../elements.js";
import { ItemsPoints } from "../service/endpoints.js";
import { api } from "../service/requester.js";

const createTattoTemp = (createTatoo) => html`
  <section id="create">
    <div class="form">
      <h2>Add tattoo</h2>
      <form class="create-form" @submit=${createTatoo}>
        <input type="text" name="type" id="type" placeholder="Tattoo Type" />
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
          rows="2"
          cols="10"
        ></textarea>
        <select id="user-type" name="user-type">
          <option value="" disabled selected>Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">First Time in Tattoo</option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Add tattoo</button>
      </form>
    </div>
  </section>
`;

export function createTattooPageView() {
  render(createTattoTemp(createTatoo), elemnts.main);
}

async function createTatoo(e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());

  const type = formData["type"];
  const imageUrl = formData["image-url"];
  const description = formData["description"];
  const userType = formData["user-type"];

  if ((!type || !imageUrl || !description, !userType)) {
    window.alert("Please fill all fields!");
    return;
  }


  
  const data = await api.post(ItemsPoints.addItem, {type,imageUrl,description,userType});

  page.redirect("/dashboard");
}
