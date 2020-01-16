const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

//1 - Conexion a BD
mongoose.connect("mongodb://127.0.0.1/users"); //Llamada a BD

//2 - Tarer el modelo
const User = require("../models/users");

//3 - listado de usuarios
router.get("/", (req, res) => {
    console.log("Listado de usuarios");
    User.find((err, users) => {
        if (!err) {
            res.send(users);
        }
    });
});

//4- traer un usuario
router.get("/:id", (req, res) => {
    User.findOne({ "id": req.params.id }, (err, user) => {
        if (!err && user) {
            res.status("200").send(user);
        } else {
            res.status("404").send("404 - NO USER FOUND!");
        }
    });
});

//5 - Agregar un usuario
router.post("/", (req, res) => {
    console.log("Agregar usuario");
    const user = new User();
    user.id = req.body.id;
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;

    user.save((err, doc) => {
        if (!err && doc) {
            res.send("New User!");
        } else {
            res.status("400").send("Params error");
            console.log("New user Error", err);
        }
    });
});

//5 - Editar un usuario
router.post("/:id", (req, res) => {
    console.log("Editar usuario");
    User.findOneAndUpdate({ "id": req.params.id }, {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
    }, (err, doc) => {
        if (!err && doc) {
            res.send("UPDATE USER!");
        } else {
            res.status("400").send("Params Error!");
        }
    });
});

//6 - Eliminar un usuario
router.delete("/:id", (req, res) => {
    User.findOneAndDelete({ "id": req.params.id }, (err, doc) => {
        if (!err) {
            res.send(`USER ${req.params.id} DELETE`);
        } else {
            res.status("404").send("USER NO FOUND!");
        }
    });
});

module.exports = router; // es necesario para que desde afuera se vean expuestas las rutas