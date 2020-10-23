let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')
var todos = [
    'Fazer café',
    'Estudar JS',
    'Acessar o Site da Rocktseat',
]

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir')
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick','deleteTodos('+ pos +')')
        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}
renderTodos();
function addTodos() {
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = '';
    renderTodos();
}

function deleteTodos(pos) {
    todos.splice(pos, 1)
    renderTodos();
}