function sayHello(name) {
    console.log("Hello!" + name);
}

function sayHelloDavid() {
    console.log("Hello David!");
}

function sayHelloMaria() { // esta funcion no se exporta por lo cual no seria visible a la hora de usarlo
    console.log("Hello Maria");
}

module.exports.sayHello = sayHello; //Del lado derecho del igual se referencia la funcion sayHello, no se pone el () porque se ejecutaría
module.exports.sayHelloDavid = sayHelloDavid;