// Function to create a new to-do item
function createTodoItem(text) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
    });

    const textElement = document.createElement('span');
    textElement.textContent = text;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        const newText = prompt('Edit your to-do:', text);
        if (newText !== null) {
            textElement.textContent = newText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoItem.remove();
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(textElement);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    return todoItem;
}

// Function to add a new to-do item
function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text !== '') {
        const todoList = document.getElementById('todo-list');
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        input.value = '';
    }
}

document.getElementById('add-button').addEventListener('click', addTodo);
