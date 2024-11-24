import { html , render } from '../../node_modules/lit-html/lit-html.js'
import { elments } from '../service/elements.js';
import { ItemsPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';
import page from '../../node_modules/page/page.mjs'

const createTemplate = (creationSolution) => html `
     <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Solution</h2>
            <form class="create-form" @submit = ${creationSolution}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
              />
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
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              ></textarea>
              <button type="submit">Add Solution</button>
            </form>
          </div>
        </section>
       
`;

export function createPageView(){
    render(createTemplate(creationSolution),elments.main);
}


function creationSolution(e){
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

    const data = api.post(ItemsPoints.addItem,{type,imageUrl,description,learnMore});

    page.redirect('/dashboard');

    }catch(err){
        window.alert(err.message);
    }

}