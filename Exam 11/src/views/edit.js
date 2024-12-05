import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'
const id = getItemId()



const editTemplate = (data) => html `
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form class="edit-form" @submit = ${onEdit}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${data.singer}/>
    <input type="text" name="album" id="album-album" placeholder="Album"  .value=${data.album}/>
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${data.imageUrl} />
    <input type="text" name="release" id="album-release" placeholder="Release date" .value=${data.release} />
    <input type="text" name="label" id="album-label" placeholder="Label"  .value = ${data.label}/>
    <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${data.sales} />

    <button type="submit">post</button>
  </form>
</div>
</section>`;


export async function editPageView(){
    const data = await api.get(itemEndpoins.id(id));
    render(editTemplate(data,onEdit),main);
}

async function onEdit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    const singer = formData["singer"];
    const album = formData["album"];
    const imageUrl = formData["imageUrl"];
    const release = formData["release"];
    const label=formData["label"];
    const sales = formData["sales"];


    if(!singer || !album || !imageUrl || !release || !label || !sales){
        window.alert('Please fill all fields!');
        return;
    }


    try{
        const data = await api.put(itemEndpoins.id(id),{
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          });
          page.redirect(`/details/${id}`);
    }catch(err){
        window.alert('Cant edit music card!');
        console.log(err.message);
    }
}