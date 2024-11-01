
export function logOut(){
    const url = 'http://localhost:3030/users/logout';
    const accessToken = localStorage.getItem('token')

    fetch(url,{
        headers:{
            'X-Authorization': `${accessToken}`
        }
    })
    .then(localStorage.clear())
    .catch(location.href= '/');

    
}   