import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { html , render } from "../lib/litI.js";
import { page } from "../lib/pageI.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";


const EditTemplate = (data , onEdit) => html `
   <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
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
            rows="2"
            cols="10"
            >${data.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          >${data.moreInfo}</textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;


export async function EditPageView(){
    const data = await api.get(itemEndpoins.id(getItemId()))
    render(EditTemplate(data,onEdit),main);
}


async function onEdit(e){
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
        const id = getItemId()
        await api.put(itemEndpoins.id(id),{ category , imageUrl , description , moreInfo})
        page.redirect(`/details/${id}`);
    }catch(err){
        console.log(err.message);
        
    }

}