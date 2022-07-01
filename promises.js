const getSomething = () => {

    return new Promise((resolve, reject) => {
        // fetch something
        //resolve('some data');
        reject('some error');
    });
};

// Promise version 1
getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log("some error")
});

// promise version 2
getSomething().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})

// in both the above examples, we can remove the parentheses if the callback function only has one argument.
// Promise version 1 (no extra parenthesis)
getSomething().then(data => {
    console.log(data);
}, err => {
    console.log("some error")
});

// promise version 2 (no extra parenthesis)
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})
