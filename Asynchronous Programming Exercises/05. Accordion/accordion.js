async function solution() {
  const section = document.querySelector("#main");
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";

  const res = await fetch(url);
  const data = await res.json();

  data.forEach((info) => {
    const accordationDiv = createElement("div", "", [["class", "accordion"]]);
    const divHead = createElement("div", "", [["class", "head"]]);
    const span = createElement("span", `${info.title}`, []);
    const button = createElement("button", "More", [
      ["id", info._id],
      ["class", "button"],
    ]);

    let textUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${info._id}`;

      fetch(textUrl)
        .then((res) => res.json())
        .then((data) => {
          const divExtra = createElement("div", "", [["class", "extra"]]);
          const p = createElement("p", `${data.content}`, []);
          divExtra.appendChild(p);
          divExtra.style.display = "none";
          accordationDiv.appendChild(divExtra);


        })
        .catch((err) => console.log(err));

    
    button.addEventListener("click", (e) => {
        let currBut = e.target;
        const Div = currBut.closest('div');
        const divExtra = Div.nextSibling;
        

        if(currBut.textContent === 'More'){
            divExtra.style.display = 'block';
            currBut.textContent = 'Less';
        }else{
            divExtra.style.display = 'none';
            currBut.textContent = 'More';
        }
    });

    divHead.appendChild(span);
    divHead.appendChild(button);

    accordationDiv.appendChild(divHead);

    section.appendChild(accordationDiv);
  });

  function createElement(type, content, attrubetes) {
    const el = document.createElement(type);
    if (content) {
      el.textContent = content;
    }

    if (attrubetes.length > 0) {
      for (let [atribute, val] of attrubetes) {
        el.setAttribute(atribute, val);
      }
    }

    return el;
  }
}

solution();
