import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { header } from "../elements/elements.js";
import { getUserId } from "../service/userService.js";

const navTemplate = (isLog) => html`
  <a id="logo" href="/"
    ><img id="logo-car" src="./images/car-logo.png" alt="img"
  /></a>
  <nav>
    <div>
      <a href="/dashboard">Our Cars</a>
      <a href="/search">Search</a>
    </div>

    <!-- Logged-in users -->
    ${isLog
      ? html`
          <div class="user">
            <a href="/create">Add Your Car</a>
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

export function initNav(ctx, next) {
  const isLog = Boolean(getUserId());
  render(navTemplate(isLog), header);
  next();
}
