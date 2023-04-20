/* Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento
de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de
1 en 1.
Esta página además tendrá un botón que será “Calcular numero casi primos”. Este botón
hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan con
un fondo amarillo.
Definimos aquí que es un “Número casi primo”:
● Número casi primo: es un número que solo es divisible por sí mismo, la unidad
y por un solo número que no sea ni la unidad ni si mismo. */





const crearTabla =()=>{
    const documento = document.querySelector(body);
    let tabla =documento.createElement("table");

cont=0;

for (let index = 0; index <= 10; index++) {
    let columna =tabla.createElement("tr");
    tabla.appendChild(columna);
    for (let index = 0; index <= 10; index++) {
        let fila =tabla.createElement("td");
       fila.textContent = cont;
       cont=cont+1;
       columna.appendChild(fila);
    }

}

document.insertAdjacentElement("afterbegin",tabla);

}

crearTabla();