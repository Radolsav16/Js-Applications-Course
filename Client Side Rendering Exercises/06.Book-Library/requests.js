
export  function createBook(book) {
    const url = 'http://localhost:3030/jsonstore/collections/books';
     fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(book)
    });
}

export  function deleteBookReq(book){
    const url = `http://localhost:3030/jsonstore/collections/books/${book.id}`
    
    fetch(url,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
       body:JSON.stringify(book)
    })

}


export function editBookReq(book,id){
    const url = `http://localhost:3030/jsonstore/collections/books/${book.id}`
    console.log(url);
    
    // fetch(url,{
    //     method:"PATCH",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //    body:JSON.stringify(book)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
}