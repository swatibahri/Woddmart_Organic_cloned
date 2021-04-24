async function getData() {
    const url = "js/our_products.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function registerUser() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export default getData;