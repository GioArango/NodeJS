const http = require("http");

//Crear servidor HTTP
const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<strong>Hello from NODEJS!</strong>");
    response.end(); //Es necesario poner esta linea para que no se quede conectado el servicio.
});

server.listen(8085);
console.log("Server running in port 8085");