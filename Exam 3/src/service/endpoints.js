const User_URL = 'http://localhost:3030/users';
const Items_URL = 'http://localhost:3030/data';


export const UserPoints = {
    register:User_URL + '/register',
    login:User_URL + '/login',
    logout:User_URL + '/logout',
};


export const ItemsPoints = {
    getAll: Items_URL + '/solutions?sortBy=_createdOn%20desc',
    addItem:Items_URL + '/solutions',
    idMethod:(id) => Items_URL + `/solutions/${id}`,
}