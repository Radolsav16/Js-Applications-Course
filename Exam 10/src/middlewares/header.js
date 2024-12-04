import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { header } from "../elements/elements.js";
import { getUserId } from "../service/userService.js";


const headerTemplate = isLog => html `
    <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Products</a>
          </div>

          ${isLog ? 
            html `
            <div class="user">
            <a href="/create">Add Product</a>
            <a href="/logout">Logout</a>
          </div>`
          :

          html `<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
          <!-- Logged-in users -->
          

          <!-- Guest users -->
          
</nav>
`;



export function initNav(ctx,next){
    const isLog = Boolean(getUserId())
    render(headerTemplate(isLog),header);
    next();
}