import { html } from "../../node_modules/lit-html/lit-html.js";
import { casualRender } from "../middewares/middleware.js";
const homePageTemplate = () => html`
 <section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
    </section>
` 


export function showHomePage(){
    casualRender(homePageTemplate);
}
