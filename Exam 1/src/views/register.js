import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { casualRender } from "../middewares/middleware.js";
import { UserPoints } from "../service/endpoints.js";
import { requesterApi } from "../service/requester.js";
import { userHelper } from "../service/userService.js";



const registerTemplate = () => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit = ${onRegister}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`;

export function showRegisterView() {
    casualRender(registerTemplate);
}


async function onRegister(e){
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());
    const email = formData["email"];
    const password = formData["password"];
    const rePass = formData['re-password'];

    if(!email  || !password || !rePass) {
        alert("Passwords don't match.");
        return;
    }

    if(rePass !== password) {
        alert("Passwords don't match.");
        return;
    }
   

    const data = await requesterApi.post('POST',UserPoints.register,{email,password})    
    
    userHelper.setUserData(data);
    
    page.redirect('/')
    
    

    
}