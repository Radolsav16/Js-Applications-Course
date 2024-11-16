window.addEventListener('hashchange',onhashchange);
const div = document.querySelector('#root');

const router = {
    '#home':homePage,
    '#catalog':catologPage,
    '#recipes':recipesPage
}

function onhashchange(){
    const hash = location.hash;
    router[hash]();
  
}

function homePage(){
    div.innerHTML = `
        <p>Home Page</p>
    `
}


function catologPage(){
    div.innerHTML = `
        <p>Catalog</p>
    `
}


function recipesPage(){
    div.innerHTML = `
        <p>Recipes Page</p>
    `
}



