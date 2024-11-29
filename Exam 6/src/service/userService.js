export function setUserData(id,accessToken){
    localStorage.setItem('userId',id);
    localStorage.setItem('accessToken',accessToken);
}


export function getAccessToken(){
    return localStorage.getItem('userId');
}

export function getUserId(){
    return localStorage.getItem('accessToken');
}

