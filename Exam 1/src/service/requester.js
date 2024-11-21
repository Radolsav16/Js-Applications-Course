import { userHelper } from "./userService.js";



//TODO POST,GET,PUT,DELETE

async function get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}


async function post(method,url,data) {
    const res = await fetch(url,{
        method,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });

    if(!res.ok){
        alert('Has this user in system!');
        return;
    }

    const result = await res.json();

    return result;

}

async function put(method,url,data) {
    
}

async function del(method,url) {
   
}


export const requesterApi = {
    get,
    post,
    put,
    del
}


