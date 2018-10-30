"use script";

const arr = [];
const input = document.getElementById('input');

function todoadd () {
    const text = input.value;
    function todoPush() {
        arr.push(text);
        const h2 = document.createElement('h2');
        h2.innerHTML = text;
        document.getElementById('block').appendChild(h2);
        document.getElementById('input').value = '';
        console.log(arr);
    }
    if ( text !== '' ) {
     todoPush();
    }
}

document.getElementById('submit').addEventListener('click', todoadd);


function test(e){
    if(e.keyCode === 13){
        todoadd();
    }
}