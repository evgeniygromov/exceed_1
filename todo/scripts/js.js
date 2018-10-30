"use script";

const arr = [];
const input = document.getElementById('input');
const block = document.getElementById('block');

function todoAdd() {
    let text = input.value;

    function todoPush() {
        arr.push(text);
        const todoListBlock = document.createElement('div');
        todoListBlock.className = 'todoListBlock';

//checked task
        // todoListBlock.addEventListener('click', () => {
        //     todoListBlock.className = 'todoListBlockChecked';
        // })

        let iconDelete = document.createElement('i');
        iconDelete.className = 'fas fa-trash';
        this.block.appendChild(iconDelete);

        let iconChecked = document.createElement('i');
        iconChecked.className = 'fas fa-pen';
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
            iconChecked.style.display='none';
            const todoListEditor = document.createElement('input');
            todoListEditor.className = 'todoListEditor';



            todoListEditor.value = text;
            todoListBlock.appendChild(todoListEditor);

            const todoListDone = document.createElement('button');
            todoListDone.className = 'todoListDone';
            todoListDone.innerHTML = 'Done'
            todoListBlock.appendChild(todoListDone);

            todoListDone.addEventListener('click', () => {
                todoListBlock.innerHTML = todoListEditor.value;
                iconChecked.style.display='inline';
            })


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





