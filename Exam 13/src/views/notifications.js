const notifiactionDiv = document.querySelector('.notification');
const spanMessage = document.querySelector('.msg');


export async function showErrorMessage (message){
    showMessage(message);
    setTimeout(clearMeassege,3000);
}


function showMessage(message){
    spanMessage.textContent = message;
    notifiactionDiv.style.display = 'block';
}



function clearMeassege(){
    notifiactionDiv.style.display = 'none'
}