import { main } from "../elements/elements.js";
import { html , render } from "../lib/litI.js";

const homeTemplate = () => html `
      <section id="hero">
          <h1>Welcome to Elden Ring Explorer, your gateway
             to the mystical world of Elden Ring! Embark
              on an epic journey through a land shrouded
               in myth and mystery. Whether you're a seasoned
                adventurer or new to this realm, our app will
                 guide you through the wonders and challenges
                  that await in this extraordinary game world</h1>
                  <img id="hero-img" src="./images/hero.png" alt="hero">
        </section>
`;


export function homePageView(){
    render(homeTemplate(),main)
}