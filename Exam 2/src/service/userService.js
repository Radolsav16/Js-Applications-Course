export function isLooged(){
    const data = getUserData();
    let isLooged = true;
    
    for(let keys in data){
        
        
        if(!data[keys]){
            isLooged = false;
            return isLooged;
        }
    }

    return isLooged;
}


export function getUserData(){
    return {
        userId:localStorage.getItem('userId'),
        email:localStorage.getItem('email'),
        accessToken:localStorage.getItem('accessToken')
    }
}


export function setUserData(id,email,accessToken){
    localStorage.setItem('userId',id);
    localStorage.setItem('email',email);
    localStorage.setItem('accessToken',accessToken);
}


export function getUserAccesToken(){
    return getUserData().accessToken;
}

export function removeUserInfo(){
    localStorage.clear();
}


export function isOwner(itemId){
    return getUserData().userId === itemId;
}