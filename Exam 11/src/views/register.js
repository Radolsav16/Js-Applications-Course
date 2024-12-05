import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { userEndpoins } from "../endpoints/userEndPoints.js";
import { api } from "../service/requester.js";
import { setUserData } from "../service/userService.js";
import page from '../../node_modules/page/page.mjs'
const registerTemplate = onRegister => html `
  <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="login-form" @submit = ${onRegister}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`;




export function registerPageView(){
    render(registerTemplate(onRegister),main)
}


async function onRegister(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const email = formData["email"];
    const password = formData["password"];
    const  rePassword = formData["re-password"];

    if(!email || !password || !rePassword){
        window.alert('Please fill all fields');
        return;
    }

    if(password !== rePassword){
        window.alert('Passwords should match!');
        return;
    }

    try{
        const data = await api.post(userEndpoins.register,{email , password});
        setUserData(data._id,data.email,data.accessToken);
        page.redirect('/dashboard');
    }catch(err){
        window.alert('User cant be regitser for some reason!');
        console.log(err.message);
        
    }
}