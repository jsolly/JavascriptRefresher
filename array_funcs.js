// forEach, map, filter

const todos = [{
        id: 0,
        text: "Clean office",
        isCompleted: false
    },
    {
        id: 1,
        text: "Dentist Appointment",
        isCompleted: true
    }
]

// const todoText = todos.forEach(function(todo) {
//     console.log(todo.text);

// });

const todoText2 = todos.map(function(todo) {
    return todo.text

});


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;

})

// console.log(todoCompleted)