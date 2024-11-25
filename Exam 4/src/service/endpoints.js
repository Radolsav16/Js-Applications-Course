const User_URL = 'http://localhost:3030/users';
const Items_URL = 'http://localhost:3030/data';


export const UserPoints = {
    register:User_URL + '/register',
    login:User_URL + '/login',
    logout:User_URL + '/logout',
};


export const ItemsPoints = {
    getAll: Items_URL + '/shows?sortBy=_createdOn%20desc',
    addItem:Items_URL + '/shows',
    idMethod:(id) => Items_URL + `/shows/${id}`,
    filter:(query) => Items_URL + `/shows?where=title%20LIKE%20%22${query}%22`
}