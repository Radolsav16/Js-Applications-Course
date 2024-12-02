import {html , render} from '../../node_modules/lit-html/lit-html.js'
import { main } from '../elements/elements.js';

const homeTemplate = () => html `
<section id="home">
<h1>
  Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
<img
  src="./images/motorcycle.png"
  alt="home"
/>

</section>`;


export function homePageView(){
    render(homeTemplate(),main)
}