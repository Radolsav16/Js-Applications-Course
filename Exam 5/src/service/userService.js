export function setUserData(id,email,accessToken){
    localStorage.setItem('userId',id);
    localStorage.setItem('email',email);
    localStorage.setItem('accessToken',accessToken);
}


export function getAccessToken(){
    return localStorage.getItem('accessToken');
}

export function getUserId(){
    return localStorage.getItem('userId');
}


export function clearUserData(){
    localStorage.clear();
}

export function setItemID(id){
    localStorage.setItem('itemId',id)
}

export function getItemId(){
    return localStorage.getItem('itemId');
}