import { html , render} from "../../node_modules/lit-html/lit-html.js";
import { isLooged } from "../service/userService.js";
import { elemnts } from "../elements.js";

const navTemplate = (isLooged) => html `
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt="logo" />
        </a>
        <nav>
          <a href="/dashboard">Collection</a>

          ${isLooged ? html ` 
            <div class="user">
            <a href="/create">Add Tattoo</a>
            <a id="logout" href="/logout">Logout</a>
          </div>`
          : html `
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
        </nav>
`;

export function navigation(ctx,next){
    const loged = isLooged();
    render(navTemplate(loged),elemnts.header);
    next();
}