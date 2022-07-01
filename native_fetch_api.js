fetch("../todos/tom.json").then(response => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log('rejected', err)
});
// err scenario only happens if there is a server rejection (like a 500 or a network error)