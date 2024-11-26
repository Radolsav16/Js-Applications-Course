const baseUrl = 'http://localhost:3030/data/cars'


export const itemEndpoins = {
    id:(id) => baseUrl + `/${id}`,
    getAll:baseUrl + `?sortBy=_createdOn%20desc`,
    search:(query) => baseUrl +`?where=model%20LIKE%20%22${query}%22`,
    normal:baseUrl
}