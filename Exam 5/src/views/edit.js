import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { main } from '../elements/elements.js';
import { itemEndpoins } from '../endpoints/itemEndpoints.js';
import { api } from '../service/requester.js';
import { getItemId } from '../service/userService.js';


const itemId = getItemId();


const editTemplate = (data) => html `
    <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit = ${onEdit}>
              <input type="text" name="model" id="model" placeholder="Model" .value =${data.model} />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                .value = ${data.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value = ${data.price}
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                .value = ${data.weight}
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                .value = ${data.speed}
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              >${data.about}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;



export async function editPageView(){
    const data = await api.get(itemEndpoins.id(itemId));
    render(editTemplate(data),main);
} 


async function onEdit(e) {
    // e.preventDefault();
    // const formData = Object.fromEntries(new FormData(e.target).entries());

    // const model = formData["model"];
    // const imageUrl = formData["imageUrl"];
    // const price = formData["price"];
    // const weight = formData["weight"];
    // const speed = formData["speed"];
    // const about = formData["about"];

    // if(!model || !imageUrl || !price || !weight || !speed || !about){
    //     window.alert('Please fill all fields!');
    //     return;
    // }



    // try{
    // const data = await api.put(itemEndpoins.id(itemId),{
    //     model,
    //     imageUrl, 
    //     price, 
    //     weight,
    //     speed,
    //     about
    //   });

    // page.redirect(`/details/${itemId}`);

    // }catch(err){
    //     window.alert(err.message);
    // }

    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
 
    const model = formData["model"];
    const imageUrl = formData["imageUrl"];
    const price = formData["price"];
    const weight = formData["weight"];
    const speed = formData["speed"];
    const about = formData["about"];

    

    if(!model || !imageUrl || !price || !weight || !speed || !about) {
        window.alert('Please fill all fields!');
        return;
    }

    try{
    const id = getItemId()    
    const data = await api.put(itemEndpoins.id(id),{
        model,
        imageUrl, 
        price, 
        weight,
        speed,
        about
      });

        page.redirect(`/details/${id}`);

    }catch(err){
        window.alert(err.message);
        return;
    }
}