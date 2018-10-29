"use script";

const arr = [];
const div = document.getElementById("block");

function todoadd (event) {
    event.preventDefault();
    let text = document.getElementById("input").value;
    function todoPush() {
        arr.push(text);
        let h2 = document.createElement('h2');
        h2.innerHTML = text;
        document.getElementById('block').appendChild(h2);
        document.getElementById("input").value = "";
        console.log(arr);
    }
    if ((text !== "")&&(text.length>4)) {
     todoPush();
    }
}

document.getElementById("submit").addEventListener("click", todoadd);


function test(e){
    code = (window.event) ? window.event.keyCode : e.which;
    if(code === 13){
        alert('Enter нажат! ');
        todoadd ();
    }
}