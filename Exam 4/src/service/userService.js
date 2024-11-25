export function setUserData(id,email,accessToken){
    localStorage.setItem('userId',id);
    localStorage.setItem('emnail',email);
    localStorage.setItem('accessToken',accessToken);
}


export function getAccessToken(){
    return localStorage.getItem('accessToken');
}

export function getUserId(){
    return localStorage.getItem('userId');
}


export function clearData(){
    localStorage.clear();
}



export function setItemId(id){
    localStorage.setItem('itemId',id);
}

export function getItemId(){
    return localStorage.getItem('itemId');
}