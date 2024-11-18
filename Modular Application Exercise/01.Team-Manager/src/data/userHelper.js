function getUserData(){
    return localStorage.getItem('UserData');
}

function setUserData(data){
     localStorage.setItem('UserData',JSON.stringify(data));
}

function getAccessToken() {
    return getUserData()?.accessToken;
}


export const userHelper = {
    getUserData,
    setUserData,
    getAccessToken
}