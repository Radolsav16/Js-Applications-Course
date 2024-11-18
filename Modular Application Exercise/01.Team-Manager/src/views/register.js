import { html } from "../../node_modules/lit-html/lit-html.js";

const registerTemp = (onRegister) => html`
  <section id="register">
    <article class="narrow">
      <header class="pad-med">
        <h1>Register</h1>
      </header>
      <form id="register-form" class="main-form pad-large" @submit = ${onRegister}>
        <div class="error">Error message.</div>
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Username: <input type="text" name="username" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <label>Repeat: <input type="password" name="repass" /></label>
        <input class="action cta" type="submit" value="Create Account" />
      </form>
      <footer class="pad-small">
        Already have an account? <a href="/register" class="invert">Sign in here</a>
      </footer>
    </article>
  </section>
`;


export async function showRegisterView(ctx) {
    ctx.render(registerTemp(onRegister));
    ctx.initNav();
    // ctx.goTo('/');   
}


function onRegister(e){
    e.preventDefault();
    console.log('Registed!');
    
}