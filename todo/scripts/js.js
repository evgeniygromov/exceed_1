"use script";

const input = document.getElementById('input');
const taskContainer = document.getElementById('taskcontainer');

function todoAdd() {
    let inputText = input.value;

    function todoPush() {
        const todoListBlock = document.createElement('div');
        todoListBlock.className = 'todoListBlock';

//render delete icon
        let iconDelete = document.createElement('i');
        iconDelete.className = 'fas fa-trash';
        taskContainer.appendChild(iconDelete);

//render editor icon
        let iconEditor = document.createElement('i');
        iconEditor.className = 'fas fa-pen';
        taskContainer.appendChild(iconEditor);

//add input value to the task
        todoListBlock.innerHTML = inputText;
        taskContainer.appendChild(todoListBlock);
        this.input.value = '';

//remove task
        iconDelete.addEventListener('click', () => {
            todoListBlock.remove();
            iconDelete.remove();
            iconEditor.remove();
        });


        iconEditor.addEventListener('click', () => {
            iconEditor.style.display = 'none';
            let todoListEditor = document.createElement('input');
            todoListEditor.className = 'todoListEditor';
//add text from task to editor
            todoListEditor.value = inputText;
            todoListBlock.appendChild(todoListEditor);
//render done button in task-editor
            let todoListDone = document.createElement('button');
            todoListDone.className = 'todoListDone';
            todoListDone.innerHTML = 'Done'
            todoListBlock.appendChild(todoListDone);
//save change from task-editor and add it to the task; show editor button;
            todoListDone.addEventListener('click', () => {
                todoListBlock.innerHTML = todoListEditor.value;
                iconEditor.style.display = 'inline';
            })
        });
    }

    if (inputText !== '') {
        todoPush();
    }
    // console.log(arr);
}

document.getElementById('submit').addEventListener('click', todoAdd);

//check enter button on keyboard
function checkKeys(e) {
    if (e.keyCode === 13) {
        todoAdd();
    }
}





