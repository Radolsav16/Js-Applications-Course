const messageTextArea = document.querySelector('#messages');
const [nameInput,messageInput,submitButton,refreshButton] = document.querySelectorAll('input');
submitButton.addEventListener('click',onMessage);
refreshButton.addEventListener('click',onRefresh);

const baseUrl = 'http://localhost:3030/jsonstore/messenger';




async function onMessage() {
    const author =  nameInput.value;
    const content = messageInput.value;

    try{
   
    const res = await fetch(baseUrl,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({author , content})
    })

    const result = await res.json();
    
    nameInput.value = '';
    messageInput.value = '';

    
    

}catch(err){
    console.log(err.message);
}
}


async function onRefresh() {
    messageTextArea.value = '';
    const res = await fetch(baseUrl);
    const data = Object.values(await res.json())
   
    data.map(obj => `${obj.author}: ${obj.content}`)
        .forEach(row => messageTextArea.value += row + '\n');
    
}