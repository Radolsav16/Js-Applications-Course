import { html , render } from 'lit-html';
import { main } from '../elements/elements.js';
import { api } from '../service/requester.js';
import { userEndpoins } from '../endpoints/userEndpoints.js';
import { setUserData } from '../service/userService.js';
import page from 'page';


const loginTemplates = onLogin => html `
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



export function loginPageView(){
    render(loginTemplates(onLogin),main)
}


async function onLogin(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const password = formData["password"];
    const email = formData["email"];


    if(!password || !email){
        window.alert('Please fill all fields');
        return;
    }

  
    try{

    const data = await api.post(userEndpoins.login,{ email , password });

    setUserData(data._id,data.accessToken);

    page.redirect('/')

    }catch(err){
        window.alert(err.message);
    }

}