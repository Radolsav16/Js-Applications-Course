import { userHelper } from "./userService.js";



//TODO POST,GET,PUT,DELETE

async function get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}


async function post(url,data) {

    const options = {
        method:"POST",
        headers:{},
    }

    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }


    const accessToken = userHelper.getAccessToken();
    
    
    if(accessToken){
        options.headers['X-Authorization'] = accessToken;
    }

  
    const res = await fetch(url,options);
    
    

    if(!res.ok){
        alert('Not make it post request');
        return;
    }

    const result = await res.json();

    return result;

}

async function put(url,data) {
 
    const options = {
        method:"PUT",
        headers:{},
    }

    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }


    const accessToken = userHelper.getAccessToken();
    
    
    if(accessToken){
        options.headers['X-Authorization'] = accessToken;
    }

  
    const res = await fetch(url,options);
    
    

    if(!res.ok){
        alert('Not make it put request');
        return;
    }

    const result = await res.json();

    return result;
}

async function del(url) {
    const options = {
        method:"DELETE",
        headers:{},
    }

    
    options.headers['Content-Type'] = 'application/json';
     


    const accessToken = userHelper.getAccessToken();
    
    
    if(accessToken){
        options.headers['X-Authorization'] = accessToken;
    }

  
    const res = await fetch(url,options);
    
    

    if(!res.ok){
        alert('Not delete request');
        return;
    }

    const result = await res.json();

    return result;
}


export const requesterApi = {
    get,
    post,
    put,
    del
}


