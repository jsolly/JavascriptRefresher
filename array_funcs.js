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

function MyForEach(todos) {
    const todoText = todos.forEach(function (todo) {
        console.log(todo.text);

    });
    console.log(todoText)
}

function MyMap() {
    const todoText2 = todos.map(function (todo) {
        return todo.text

    });
    console.log(todoText2)
}

function MyFilter() {

    const todoCompleted = todos.filter(function (todo) {
        return todo.isCompleted == true;

    })
    console.log(todoCompleted)
}