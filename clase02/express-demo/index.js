const express = require("express");
const PORT = 8086;
//const PUBLIC = 'public';

const app = express();

app.listen(PORT, () => {
    console.log(`APP Running PORT ${PORT}...`);
});

/// MIDDLEWARE ///
const helmet = require("helmet"); //helmet se utiliza para temas de seguridad
app.use(helmet());
const myLogger = (req, res, next) => { //Es util para hacer el logger de las rutas por las cuales pasa (que requieren)
    console.log(`LOGGER: `, req.method, req.originalUrl);
    next();
}
app.use(myLogger); //Registro em Middleware en Express

//Sirvo contenido estatico, por ejemplo un html
//app.use(express.static(PUBLIC));

/// RUTEO ///
app.get("/", (request, response) => {
    response.send("Hello from Express!");
});


//Incluyo mi AI en mi app
const series = require("./routes/series");
app.use("/series", series);

app.post("/", (request, response) => {
    response.send("Hello POST!");
});

// RegEx
app.get(/mario/, (req, res) => {
    res.send("Pediste algo con mario");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send(`LLego esto por route params...${JSON.stringify(req.params)}`);
});