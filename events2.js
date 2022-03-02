
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target.className)
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name')
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value)
}