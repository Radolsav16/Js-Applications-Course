const User_URL = 'http://localhost:3030/users';
const Items_URL = 'http://localhost:3030/data';


export const UserPoints = {
    register:User_URL + '/register',
    login:User_URL + '/login',
    logout:User_URL + '/logout',
};


export const ItemsPoints = {
    getAll: Items_URL + '/tattoos?sortBy=_createdOn%20desc',
    addItem:Items_URL + '/tattoos',
    idMethod:(id) => Items_URL + `/tattoos/${id}`,
    likeMethodTatto:(tattooId) => Items_URL + `/likes?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count`,
    getUserLikes:(tattooId,userId) => Items_URL + `/likes?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    like: Items_URL + '/likes'
}