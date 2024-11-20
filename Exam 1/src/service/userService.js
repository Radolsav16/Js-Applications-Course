function setUserData(data){
    localStorage.setItem('userData',data)
}

function getUserData(){
    return localStorage.getItem('userData');
}

function getAccessToken(){
    const data = getUserData();
    const accessToken = data.accessToken;

    return accessToken;
}

function getUserId(){
    const data = getUserData();
    const id = data.is;

    return id;
}


export const userHelper = {
    setUserData,
    getUserData,
    getAccessToken,
    getUserId
} 