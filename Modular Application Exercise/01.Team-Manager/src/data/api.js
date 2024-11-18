import { userHelper } from "./userHelper.js";

async function requester(method,url,data) {
    const options = {
        method,
        headers:{}
    };

    const accessToken = userHelper.getAccessToken();

    if(accessToken){
        options.headers['X-Authorization'] = accessToken;
    }

    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };


    const response = await fetch(url,options);

    if(!response.ok){
        const err = new Error('Error in responce!');
        throw err;
    }

    const result = await response.json();


    return result;
    

}


async function get(url){
    return await requester('GET',url);
}

async function post(url,data) {
    return await requester('POST',url,data)
}


async function put(url,data) {
    return await requester('PUT',url,data)
}

async function del(url) {
    return await requester('DELETE',url)
}

export const api = {
    get,post,put,del
}