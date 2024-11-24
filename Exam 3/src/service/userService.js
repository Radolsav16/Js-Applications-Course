export function setUserData(id,email,accessToken){
    if(!id || !email || !accessToken){
        window.alert('Cant make register or login !');
        return;
    }

    localStorage.setItem('id',id);
    localStorage.setItem('email',email);
    localStorage.setItem('accessToken',accessToken);
}


export function getUserData(){
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    const accessToken = localStorage.getItem('accessToken');

    if(!id || !email || !accessToken){
        return null;
    }

    return {
        id,
        email,
        accessToken
    }
};

export function getAccessToken(){
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
}


export function clearData(){
    localStorage.clear();
}


export function isLogged(){
    return Boolean(getAccessToken())
}

export function isOwner(userId,ownerId){
    return userId === ownerId;
}

export function getUserId(){
    return localStorage.getItem('id');
}