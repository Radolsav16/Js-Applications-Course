const url = "http://localhost:3030/jsonstore/cookbook/recipes";

const divLinks = document.querySelector('#guest');
divLinks.style.display = 'block';

const registerButton = document.querySelector('')

const main = document.querySelector("main");
const p = document.querySelector("p");
main.removeChild(p);
let id = 1;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    Object.keys(data).forEach((key) => {
      let obj = data[key];

    const article = document.createElement('article');
    article.className = 'preview';
    article.id = key;
    

    const divTitle = document.createElement('div');
    divTitle.className = 'title';
    divTitle.id = key;
   

    const h2 = document.createElement('h2');
    h2.textContent = `${obj.name}`;
    h2.id = key;
   

    divTitle.appendChild(h2);

    const divSmall = document.createElement('div');
    divSmall.className = 'small';
    divSmall.id = key;
   

    const img = document.createElement('img');
    img.src = `${obj.img}`;
    img.id = key;
 

    divSmall.appendChild(img);

    article.appendChild(divTitle);
    article.appendChild(divSmall);

    main.appendChild(article)
    

    article.addEventListener('click',(e)=>{
        main.innerHTML = '';
        const id = e.target.id;

        
        
        
        const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

        fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                const article = document.createElement('article');
                const h2 = document.createElement('h2');
                h2.textContent = data.name;

                const div = document.createElement('div');
                div.className = 'band';

                const divThumb = document.createElement('div');
                divThumb.className = 'thumb';

                const img = document.createElement('img');
                img.src = `${data.img}`;

                divThumb.appendChild(img);

                const divIngredients = document.createElement('div');
                divIngredients.className = 'ingredients';

                const h3 = document.createElement('h3');
                h3.textContent = 'Ingredients:';

                const ul = document.createElement('ul');

                data.ingredients.forEach((ingredient)=>{
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ul.appendChild(li);
                })

                divIngredients.appendChild(h3);
                divIngredients.appendChild(ul);

                div.appendChild(divThumb);
                div.appendChild(divIngredients);

                article.appendChild(h2);
                article.appendChild(div);

                const divDescription = document.createElement('div');
                divDescription.className = 'description';

                const h3Preparation = document.createElement('h3');
                h3Preparation.textContent = 'Preperation:';

                const p1 = document.createElement('p');
                p1.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.';

                const p2 = document.createElement('p');
                p2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.';

                const p3 = document.createElement('p');
                p3.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.';

                divDescription.appendChild(h3Preparation)
                divDescription.append(p1,p2,p3);

                article.appendChild(divDescription);

                main.appendChild(article)




            })
            .catch((err)=>console.log(err))



    })

    });
  })
  .catch((err) => console.log(err));


  

 
  
  
