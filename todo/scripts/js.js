"use script";

const arr = [];
const input = document.getElementById('input');
const block = document.getElementById('block');

function todoAdd() {
    const text = input.value;

    function todoPush() {
        arr.push(text);
        const todoListBlock = document.createElement('div');
        todoListBlock.className = 'todoListBlock';

        todoListBlock.addEventListener('click', () => {
            this.todoListBlock.className = 'todoListBlockChecked';
        })
        let iconDelete = document.createElement('i');
        iconDelete.className = 'fas fa-trash';
        this.block.appendChild(iconDelete);

        let iconChecked = document.createElement('i');
        iconChecked.className = 'fas fa-calendar-check';
        this.block.appendChild(iconChecked);
        todoListBlock.innerHTML = text;
        this.block.appendChild(todoListBlock);
        this.input.value = '';


        iconDelete.addEventListener('click', () => {
            todoListBlock.remove();
            iconDelete.remove();
            iconChecked.remove();
        });
        iconChecked.addEventListener('click', () => {
            // const todoListInput = document.createElement('div');
            // todoListInput.className = 'todoListInput';
            // block.appendChild(todoListInput);
            //
            // const todoListContainer = document.createElement('div');
            // todoListContainer.className = 'todoListContainer';
            // todoListBlock.appendChild(todoListContainer);
            iconChecked.style.display='none';
            const todoListEditor = document.createElement('input');
            todoListEditor.className = 'todoListEditor';

            // todoListEditor.setAttribute('readonly');
            todoListEditor.value = text;
            todoListBlock.appendChild(todoListEditor);
            dicument.body.style.backgroundColor='gray';

            // todoListBlock.remove();
            // iconDelete.remove();
            // iconChecked.remove();
        });
    }




    // todoListBlock.addEventListener('click', () => {
    //     text.style.background ='red';
    // });

    //
    // function chekers () {
    //     if (this.todoListBlock.className = 'todoListBlock') {

    // }
    // else  {
    //         this.todoListBlock.addEventListener('click', ()=> {
    //             this.todoListBlock.className = 'todoListBlock';
    //         })
    //     }
    // }
    // chekers();





    if ( text !== '' ) {
        todoPush();
    }
    console.log(arr);
}

document.getElementById('submit').addEventListener('click', todoAdd);

function test(e) {
    if (e.keyCode === 13) {
        todoAdd();
    }
}





