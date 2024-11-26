import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { main } from '../elements/elements.js';
import { itemEndpoins } from '../endpoints/itemEndpoints.js';
import { api } from '../service/requester.js';





const createTemplate = (onCreate) => html `
     <section id="create">
          <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form class="create-form" @submit = ${onCreate}>
              <input type="text" name="model" id="model" placeholder="Model"/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;



export async function createPageView(){
    render(createTemplate(onCreate),main);
} 


async function onCreate(e) {
    e.preventDefault();



    const formData = Object.fromEntries(new FormData(e.target).entries());

    console.log(formData);
    
    const model = formData["model"];
    const imageUrl = formData["imageUrl"];
    const price = formData["price"];
    const weight = formData["weight"];
    const speed = formData["speed"];
    const about = formData["about"];

    console.log(weight);
    

    if(!model || !imageUrl || !price || !weight || !speed || !about){
        window.alert('Please fill all fields!');
        return;
    }



    try{

    const data = await api.post(itemEndpoins.normal,{
        model,
        imageUrl, 
        price, 
        weight,
        speed,
        about
      });

    page.redirect(`/dashboard`);

    }catch(err){
        window.alert(err.message);
    }
}