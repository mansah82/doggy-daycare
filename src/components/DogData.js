

async function getData() {

    const apiUrl = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41"
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

}

window.onload = () => {
    getData();
}