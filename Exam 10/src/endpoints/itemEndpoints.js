const baseUrl = 'http://localhost:3030/data/products'


export const itemEndpoins = {
    id:(id) => baseUrl + `/${id}`,
    getAll:baseUrl + `?sortBy=_createdOn%20desc`,
    normal:baseUrl
}