const buttonLoad = document.querySelector('#loadBooks');
const url = 'http://localhost:3030/jsonstore/collections/books';

buttonLoad.addEventListener('click',loadBooks);

const table = document.querySelector('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);

const form = document.querySelector('form');
form.addEventListener('submit',createBook);







async function loadBooks(e){
    const res = await fetch(url);
    const data = await res.json();

    Object.keys(data)
        .forEach((key)=>{
            const obj = data[key];
            createTableRow(obj,key)
    })

    
}


function createTableRow(obj,id){

    
    const tr = document.createElement('tr');
    tr.id = id;

    const tdTitle = document.createElement('td');
    tdTitle.textContent = obj.title;

    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = obj.author;


    const tdButtons = document.createElement('td');
    
    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit';

    buttonEdit.addEventListener('click',editBook);


    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';

    buttonDelete.addEventListener('click',deleteBook);

    tdButtons.appendChild(buttonEdit);
    tdButtons.appendChild(buttonDelete);


    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdButtons);

    tbody.appendChild(tr);


}

async function editBook(e){
    const table = e.target.closest('table');
    const form = table.nextElementSibling;

    const inputTitle = form.querySelector('input[name="title"]');
    const inputAuthor = form.querySelector('input[name="author"]');

    

    const currTr = (e.target.parentElement).parentElement;

    const id = currTr.id;

    
    const h3 = form.querySelector('h3');
    h3.textContent = 'Edit Form';

    const [titleTd,authorTd,actionTd] = currTr.querySelectorAll('td');

    const title = titleTd.textContent;
    const author = authorTd.textContent;

    inputTitle.value = title;
    inputAuthor.value = author;


    const changedTitle = inputTitle.value;
    const changedAuthor = inputAuthor.value;

    const buttonSubmit = form.querySelector('button');

    buttonSubmit.addEventListener('click',async (e)=>{
        const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
        const res = await fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({author:changedAuthor,title:changedAuthor})
    })

    const data = await res.json();

    titleTd.value = changedTitle;
    inputAuthor.value = changedAuthor;    
    
    });
    


    

    


    
    
}

function deleteBook(e){
}


async function createBook(e) {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);

    const title = formData.get('title');
    const author = formData.get('author');

    if(title === '' || author === '') return;

    const res = await fetch(url,{
        method:"Post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({author,title})
    })

    const data = await res.json();

    if(tbody.children.length !== 0){
        createTableRow(data);
    }

    

   form.reset();



    

    

}