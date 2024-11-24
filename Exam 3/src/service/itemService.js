export function setItemId(id){
    localStorage.setItem('itemId',id)
}

export function getItemId(){
    return localStorage.getItem('itemId');
}