//Obtener modulos a usar
const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3000;

//Crear el servidor web
const app = express();

//Cache
//app.enable("view cache");

//Configuracion de habdlebars
app.engine("handlebars", exphbs()); // Indicar a express cual es el motor de templates a usar en este caso handlebars
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home", {
        title: "Bienvenidos a mi sitio",
        subtitle: "Gracias por venir",
        arrLang: ["Javascript", "Java", "Phyton", "C#", "PHP"],
        content: "Lorem etc..."
    }); //Se encarga de renderizar el texto devuelto a través del motor de templates
});

app.get("/cliente", (req, res) => {
    res.render("cliente"); //Se encarga de renderizar el texto devuelto a través del motor de templates, el parametro es el nombre del view
});

//Nuevo sitio
const mysite = require("./routes/mysite");
app.use("/mysite", mysite);

//Statics
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`APP Running PORT ${PORT}...`);
});