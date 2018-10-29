"use strict";

function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById("submits").addEventListener("click", (event) => {
        event.preventDefault();
        // if (submits !== null) {
        var name = document.getElementById("names").value;
        var pass = document.getElementById("pass").value;
        // alert(`Ваш логин: ${name}, Ваш пароль: ${pass}`);
        console.log(`Ваш логин: ${name}, Ваш пароль: ${pass}`);
    }
    // }
)
