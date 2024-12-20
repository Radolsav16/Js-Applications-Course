export function setUserData(id,accessToken){
    localStorage.setItem('userId',id);
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


export function isOwner(userId,ownerID){
    return userId === ownerID;
}

