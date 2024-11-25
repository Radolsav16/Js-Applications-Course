import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { header } from "../service/elements.js";
import { getUserId } from "../service/userService.js";

const navTemplate = (isLogin) => html`
  <a id="logo" href="/"
    ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
  </a>
  <nav>
    <div>
      <a href="/dashboard">TV Shows</a>
      <a href="/search">Search</a>
    </div>

    ${isLogin
      ? html` <div class="user">
          <a href="/create">Add Show</a>
          <a href="/logout">Logout</a>
        </div>`
      : html` <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>
`;


export function navInit(ctx,next){
    const isLogin = Boolean(getUserId());
    render(navTemplate(isLogin),header);
    next();
}
