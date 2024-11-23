import { html , render} from "../../node_modules/lit-html/lit-html.js";

const notificationTemp = (message) => html`
<div id="errorBox" class="notification" style ="display:block">
<span class="msg">${message}</span>
</div>
`

const sectionErorr = document.getElementById('notifications');

export function showErrorMessage(message){
   render(notificationTemp(message),sectionErorr);
}


