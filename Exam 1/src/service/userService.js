
function setUserData(id,email,accessToken){
    localStorage.setItem('userID',id);
    localStorage.setItem('email',email);
    localStorage.setItem('accessToken',accessToken)
}

function getUserData(){
    return {
        id:localStorage.getItem('userID'),
        email:localStorage.getItem('email'),
    };
}

function getAccessToken(){
    return localStorage.getItem('accessToken');
}

function getUserId(){
    return localStorage.getItem('userID');
}

function clearUserData(){
    localStorage.clear();
}


function isUserIsLogged(){
    return Boolean(getUserData());
}

function isLoogedUserIsOwner(id,ownerId){
    return id === ownerId;
}


export const userHelper = {
    setUserData,
    getUserData,
    getAccessToken,
    getUserId,
    clearUserData,
    isUserIsLogged,
    isLoogedUserIsOwner
} 



