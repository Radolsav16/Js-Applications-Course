import { getAccessToken } from "./userService.js";

async function requester(method,url,data) {
    const options = {
        method,
        headers:{}
    }

    options.headers['Content-Type'] = 'application/json';

    const accessToken = getAccessToken()

    if(accessToken){
        options.headers['X-Authorization'] = accessToken;
    }

    if(data){
        options.body = JSON.stringify(data);
    }

    const res = await fetch(url,options);

    if(!res.ok){
        throw Error('Somethink wrong in the request!')
    }

    if(res.status === 204){
        return;
    }

    const result = await res.json();

    return result;
}



async function get(url) {
    return await requester('GET',url);
}

async function post(url,data) {
    return await requester('POST',url,data);
}

async function put(url,data) {
    return await requester('PUT',url,data);
}

async function del(url) {
    return await requester('DELETE',url);
}


export const api = {
    get,
    post,
    put,
    del
}