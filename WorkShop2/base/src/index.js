const url = "http://localhost:3030/data/recipes";



const registerButton = document.querySelector('#register');
const LoginButton = document.querySelector('#login');


function navigationInit(){

  const email = localStorage.getItem('email');

  if(email && email !== 'undefined'){
    const divUser = document.querySelector('#user');
    divUser.style.display = 'block';

    const logoutButton = document.querySelector('#logoutBtn');
    logoutButton.addEventListener('click',logOut);
  }else{
    const divGuest = document.querySelector('#guest');
    divGuest.style.display = 'block';
  }


}

navigationInit();


function logOut(e){
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    location.href = 'file:///C:/Users/Lenovo/OneDrive/Desktop/druga%20javascript%20papka/Javascript/SoftUni/Js-Applications-Course/WorkShop2/base/index.html';
}




const main = document.querySelector("main");
const p = document.querySelector("p");
main.removeChild(p);
let id = 1;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((obj) => {
    const article = document.createElement('article');
    article.className = 'preview';
    article.id = obj._id;
    

    const divTitle = document.createElement('div');
    divTitle.className = 'title';
    divTitle.id = obj._id;
   

    const h2 = document.createElement('h2');
    h2.textContent = `${obj.name}`;
    h2.id = obj._id;
   

    divTitle.appendChild(h2);

    const divSmall = document.createElement('div');
    divSmall.className = 'small';
    divSmall.id = obj._id;
   

    const img = document.createElement('img');
    img.src = `${obj.img}`;
    img.id = obj._id;
 

    divSmall.appendChild(img);

    article.appendChild(divTitle);
    article.appendChild(divSmall);

    main.appendChild(article)
    

    article.addEventListener('click',(e)=>{
        main.innerHTML = '';
        const id = e.target.id;

        const newUrl = `${url}/${id}`;

        fetch(newUrl)
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

                divDescription.appendChild(h3Preparation)

                data.steps.forEach((step)=>{
                  const p = document.createElement('p');
                  p.textContent = step;
                  divDescription.appendChild(p);
                })
                article.appendChild(divDescription);

                main.appendChild(article)




            })
            .catch((err)=>console.log(err))

        



    })

    });
  })
  .catch((err) => console.log(err));


  

 
  
  
