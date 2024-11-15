export async function getBookData() {
    const url = 'http://localhost:3030/jsonstore/collections/book';
    const res = await fetch(url);
    const data = await res.json()
    return data;
}