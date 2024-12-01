import { html , render } from 'lit-html';
import { main } from '../elements/elements.js';
import { api } from '../service/requester.js';
import { userEndpoins } from '../endpoints/userEndpoints.js';
import { setUserData } from '../service/userService.js';
import page from 'page';

const registerTemplates = onRegister => html `
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
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
 </section>

`;



export function registerPageView(){
    render(registerTemplates(onRegister),main)
}


async function onRegister(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const password = formData["password"];
    const email = formData["email"];
    const rePassword = formData["re-password"];

    if(!password || !email || !rePassword){
        window.alert('Please fill all fields');
        return;
    }

    if(rePassword !== password){
        window.alert('Password should match!');
        return;
    }

    try{

    const data = await api.post(userEndpoins.register,{ email , password });

    setUserData(data._id,data.accessToken);

    page.redirect('/')

    }catch(err){
        window.alert(errmessage);
        
    }


}