/* 1. Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”,
añada un elemento con un número aleatorio a una lista desordenada (elemento UL). */

const texto = document.querySelector(".boton");

const lista = () => {

    const list = document.querySelector("ul");

    let numero = Math.random();

    const li = document.createElement("li");
    li.textContent = numero;

    list.insertAdjacentElement("afterbegin", li);

}


texto.addEventListener("click", lista);



