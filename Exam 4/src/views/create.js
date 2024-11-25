import { html , render } from '../../node_modules/lit-html/lit-html.js';
import { main } from '../service/elements.js';
import { ItemsPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';
import page from '../../node_modules/page/page.mjs'


const createTemplate = (onCreate) => html `
<section id="create">
          <div class="form">
            <h2>Add Show</h2>
            <form class="create-form" @submit = ${onCreate}>
              <input
              type="text"
              name="title"
              id="title"
              placeholder="TV Show title"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
          />
          <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
        />
            <textarea
              id="details"
              name="details"
              placeholder="Details"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Show</button>
            </form>
          </div>
        </section>
`;


export function createPageView(){
    render(createTemplate(onCreate),main);
}


async function onCreate(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const imageUrl = formData["image-url"];
    const title = formData["title"];
    const genre = formData["genre"];
    const details = formData["details"];
    const country = formData["country"];

    if(!imageUrl || !title || !genre || !details || !country){
        window.alert('Please fill all fields!');
        return;
    }
    try{
    const data = await api.post(ItemsPoints.addItem,{
        title,
        imageUrl, 
        genre, 
        country,
        details});

        page.redirect('/dashboard');

    }catch(err){
        window.alert(err.message);
        return;
    }


}