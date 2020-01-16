const express = require("express");
const bodyParser = require("body-parser");
const app = express(); //Se guarda una instacia de este aplication server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`APP Running PORT ${PORT}...`);
});

/// MIDDLEWARE: Quiere decir que está en la mitad de un request y un response ///
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const myLogger = (req, res, next) => { //Es util para hacer el logger de las rutas por las cuales pasa (que requieren)
    console.log(`LOGGER: `, req.method, req.originalUrl);
    next();
}
app.use(myLogger); //Registro em Middleware en Express

//Obtengo rutas
const users = require("./routes/users");
app.use("/users", users);

//Default
app.get("/", (req, res) => {
    res.status("200").send("Gracias! sirija sus request a /users");
});