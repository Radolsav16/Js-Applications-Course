

function setUserData(data){
    localStorage.setItem('userData',data)
}

function getUserData(){
    return localStorage.getItem('userData');
}

function getAccessToken(){
    const data = getUserData();
    if(data){
    const accessToken = data.accessToken;
    return accessToken;
    }else{
        return null
    }
}

function getUserId(){
    const data = getUserData();
    const id = data.is;

    return id;
}

function clearUserData(){
    localStorage.clear();
}


export const userHelper = {
    setUserData,
    getUserData,
    getAccessToken,
    getUserId,
    clearUserData
} 



