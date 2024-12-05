import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'

const createTemplate = onCreate => html `<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form class="create-form" @submit = ${onCreate}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`


export function createPageView(){
    render(createTemplate(onCreate),main)
}

async function onCreate(e) {
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
        const data = await api.post(itemEndpoins.normal,{
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          });
          page.redirect('/dashboard')
    }catch(err){
        window.alert('Cant create music card!');
        console.log(err.message);
    }
}