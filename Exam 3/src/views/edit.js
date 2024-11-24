import { html , render } from '../../node_modules/lit-html/lit-html.js'
import { elments } from '../service/elements.js'
import { ItemsPoints } from '../service/endpoints.js';
import { getItemId } from '../service/itemService.js';
import { api } from '../service/requester.js';
import page from '../../node_modules/page/page.mjs'

const editTemolate  = (data) => html `
      <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit =${onEdit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
                .value = ${data.type}
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
                rows="2"
                cols="10"
              >${data.description}</textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              >${data.learnMore}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;


export async function showEditPage(){
    const data = await api.get(ItemsPoints.idMethod(getItemId()));
    console.log(data);
    
    render(editTemolate(data),elments.main);
    
}


async function onEdit(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    
    const type = formData["type"];
    const imageUrl = formData["image-url"];
    const description = formData["description"];
    const learnMore = formData["more-info"];

    if(!type || !imageUrl || !description || !learnMore) {
        window.alert('Please fill all fields!');
        return;
    }

    try{
        console.log(ItemsPoints.idMethod(getItemId()));
        
    const data = await api.put(ItemsPoints.idMethod(getItemId()),{type,imageUrl,description,learnMore});

    page.redirect(`/details/${data._id}`);

    }catch(err){
        window.alert(err.message);
    }
}