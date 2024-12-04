export function setUserData(id,email,accessToken){
    localStorage.setItem('userId',id);
    localStorage.setItem('email',email);
    localStorage.setItem('accessToken',accessToken);
}



export function getUserId(){
   return  localStorage.getItem('userId')
}

export function getAccessToken(){
    return localStorage.getItem('accessToken')
}


export function clearUserData(){
    localStorage.clear();
}


export function isOwner(userId,ownerId){
    return userId === ownerId;
}