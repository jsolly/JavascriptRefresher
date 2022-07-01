const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting resource')
            }
        });
        request.open('GET', resource);
        request.send();
    });
};


getTodos('../todos/tom.json').then(data => {
    console.log("promise 1 resolved", data);
    return getTodos('../todos/bob.json')
}).then(data => {
        console.log("promise 2 resolved", data)
        return getTodos("../todos/kathy.json");
}).then(data => {
        console.log("promise 3 resolved", data)
}).catch(err => {
    console.log('promise rejected', err)
})
// The catch block will get errors from any of the promises