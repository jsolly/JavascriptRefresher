// Code that can perform taks that take some time to complete. Start now and finish later
// blocking code when when a piece of code stops other code from running.

// network/api requests

function asyncExample1(a, b) {
    console.log(1);
    console.log(2);
    console.log(3);
    setTimeout(() => {
        console.log("Callback function fired");
    }, 2000); // async
    console.log(4);
    console.log(5);
    // callback function returns
  }

// asyncExample1();

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('Could not fetch data', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
    request.send(); 
};

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

console.log(1);
console.log(2);
// callback func
getTodos((err, data) => {
    console.log('Second callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data)
    }

});
console.log(3);
console.log(4);