<script>

    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');


    function addTodo() {
        const task = todoInput.value.trim();
        if (task !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.innerHTML = `
                <span>${task}</span>
                <button onclick="removeTodo(this)">Remove</button>
            
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    
    function removeTodo(button) {
        const listItem = button.parentElement;
        todoList.removeChild(listItem);
    }

    
    function clearAll() {
        todoList.innerHTML = '';
    }
</script>
