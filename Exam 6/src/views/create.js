import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { html , render } from "../lib/litI.js";
import { page } from "../lib/pageI.js";
import { api } from "../service/requester.js";


const createTemplate = (onCreate) => html `
   <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Add Character</h2>
            <form class="create-form" @submit = ${onCreate}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
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
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;


export async function createPageView(){
    render(createTemplate(onCreate),main);
}


async function onCreate(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());


    const category = formData["category"];
    const imageUrl = formData["image-url"];
    const description = formData["description"];
    const moreInfo = formData["additional-info"];

    if(!category || !imageUrl || !description || !moreInfo){
        window.alert('Please all fields!');
        return;
    }

    try{
        const data = await api.post(itemEndpoins.normal,{category,imageUrl,description,moreInfo})
        page.redirect('/dashboard');
    }catch(err){
        console.log(err.message);
        
    }

}