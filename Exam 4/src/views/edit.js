import {html , render } from '../../node_modules/lit-html/lit-html.js';
import { main } from '../service/elements.js';
import { ItemsPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';
import { getItemId } from '../service/userService.js';
import page from '../../node_modules/page/page.mjs'


const editTemplate = (data , onEdit) => html `
        <section id="edit">
          <div class="form">
            <h2>Edit Show</h2>
            <form class="edit-form" @submit = ${onEdit}>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="TV Show title"
                .value =${data.title}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value = ${data.imageUrl}
              />
              <input
              type="text"
              name="genre"
              id="genre"
              placeholder="Genre"
              .value = ${data.genre}
            />
            <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            .value = ${data.country}
          />
              <textarea
                id="details"
                name="details"
                placeholder="Details"
                rows="2"
                cols="10"
              >${data.details}</textarea>
              <button type="submit">Edit Show</button>
            </form>
          </div>
        </section>
`;


export async function editPageView(){
    const id = getItemId();
    const data = await api.get(ItemsPoints.idMethod(id));

    render(editTemplate(data,onEdit),main);
}


async function onEdit(e) {
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
    const id = getItemId()    
    const data = await api.put(ItemsPoints.idMethod(id),{
        title,
        imageUrl, 
        genre, 
        country,
        details});

        page.redirect(`/details/${id}`);

    }catch(err){
        window.alert(err.message);
        return;
    }
}