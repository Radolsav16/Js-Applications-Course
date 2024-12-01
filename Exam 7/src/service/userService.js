export function setUserData(id,accessToken){
    localStorage.setItem('userId',id);
    localStorage.setItem('accessToken',accessToken);
}


export function clearUserData(){
    localStorage.clear();
}


export function getAccessToken(){
    return localStorage.getItem('accessToken');
}


export function getUserId(){
    return localStorage.getItem('userId');
}


export function isOwner(userId,ownerId){
    return userId === ownerId;
}