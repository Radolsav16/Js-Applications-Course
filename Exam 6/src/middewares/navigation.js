import { header } from "../elements/elements.js";
import { html, render } from "../lib/litI.js";
import { getUserId } from "../service/userService.js";

const navTemplete = (isLog) => html`
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
  <nav>
    <div>
      <a href="/dashboard">Characters</a>
    </div>

    <!-- Logged-in users -->
    ${isLog
      ? html`
          <div class="user">
            <a href="/create">Add Character</a>
            <a href="/logout">Logout</a>
          </div>
        `
      : html` <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}

    <!-- Guest users -->
  </nav>
`;


export function initNavigation(ctx,next){
    const isLog = Boolean(getUserId());
    render(navTemplete(isLog),header)
    next();
}