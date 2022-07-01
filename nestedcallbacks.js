const getTodos2 = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch data', undefined);
        }
    });
    request.open('GET', resource);
    request.send();
};


// Don't do this, do promises instead
getTodos2("../todos/kathy.json", (err, data) => {
    console.log(data);
    getTodos2("../todos/tom.json", (err, data) => {
        console.log(data);
        getTodos2("../todos/bob.json", (err, data) => {
            console.log(data);
        });
    });

});
