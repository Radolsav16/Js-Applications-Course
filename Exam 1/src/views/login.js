import { html } from "../../node_modules/lit-html/lit-html.js"
import { casualRender } from "../middewares/middleware.js";
import { requesterApi } from "../service/requester.js";
import page from "../../node_modules/page/page.mjs";
import { UserPoints } from "../service/endpoints.js";
import { userHelper } from "../service/userService.js";
import { showErrorMessage } from "../middewares/errorMessage.js";

const loginTemplate = () => html `  
<section id="login">
<div class="form">
  <h2>Login</h2>
  <form class="login-form" @submit = ${onLogin}>
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>
`;

export function showLoginView(){
   casualRender(loginTemplate);
}


async function onLogin(e){
    e.preventDefault();
    const { email , password } = Object.fromEntries(new FormData(e.target).entries());
    
    if(!email || !password ) {
      showErrorMessage('Please fill all fields!');
      return;
    };

    const data = await requesterApi.post(UserPoints.login,{email,password});

    

    userHelper.setUserData(data._id,data.email,data.accessToken);
  
    
    page.redirect('/');


    
    

}