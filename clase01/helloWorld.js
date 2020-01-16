/*console.log("Hello World!");

function sayHello() {
    console.log("Hello from function!");
}

sayHello();*/


//1 - Asincronismo -> peticiones no bloqueantes
//2 - Modulos -> reutilizacion de codigo de forma eficiente
//3 - Callbacks -> Son funciones que se ejecutan en respuesta a la finalizacion de una tarea o evento

//Modulos
const util = require("util"); //require unicamente se usa en nodeJs para llamar modulos
const lib = require("./clase01Lib");
console.log("Variable", util.types.isDate("Hola!"));

lib.sayHelloDavid();
lib.sayHello("Gio")