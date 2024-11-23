const User_URL = 'http://localhost:3030/users';
const Items_URL = 'http://localhost:3030/data';



export const UserPoints = {
    register:User_URL + '/register',
    login:User_URL + '/login',
    logout:User_URL + '/logout',
};


export const ItemsPoints = {
    getAll: Items_URL + '/cyberpunk?sortBy=_createdOn%20des',
    addItem:Items_URL + '/cyberpunk',
    idMethod:(id) => Items_URL + `/cyberpunk/${id}`,
}
