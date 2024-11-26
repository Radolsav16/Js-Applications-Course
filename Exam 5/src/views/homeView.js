import { html , render } from '../../node_modules/lit-html/lit-html.js'
import { main } from '../elements/elements.js'
const   HomeTemplate = () => html`
   <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
 </section>
`

export function homePageView(){
    render(HomeTemplate(),main);
}