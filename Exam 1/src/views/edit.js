import page from '../../node_modules/page/page.mjs';
import {html , render} from '../../node_modules/lit-html/lit-html.js'
import { main } from '../middewares/middleware.js'
import { ItemsPoints } from '../service/endpoints.js';
import { requesterApi } from '../service/requester.js';
import { getItemId } from '../service/itemService.js';
import { showErrorMessage } from '../middewares/errorMessage.js';

const editTemplate = (data) => html`
     <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit =${onRegister}>
              <input type="text" name="item" id="item" placeholder="Item" .value=${data.item}/>
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${data.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                .value=${data.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value=${data.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              >${data.description}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`


export async function showEditView(ctx){
  
    const data = await requesterApi.get(ItemsPoints.idMethod(getItemId()));
    
    render(editTemplate(data),main);
}


async function onRegister(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const {item,

        imageUrl,
        
        price,
        
        availability,
        
        type,
        
        description} = formData;

        if(!item || !imageUrl || !price || !availability || !type || !description) {
          showErrorMessage('Please fill all fields !')
          return;
        }


        const data = {item,imageUrl,price,availability,type,description};

        
    

        const result = await requesterApi.put(ItemsPoints.idMethod(getItemId()),data);
    
    
        page.redirect('/market');

    
    
}