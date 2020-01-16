const express = require("express");
const request = require("request");
const router = express.Router();
const URL = "https://jsonplaceholder.typicode.com/posts/1/comments?";


router.get("/:postId=", (req, res) => {
    console.log("Param! ", req.params.serie);
    request(`${URL}${req.params.serie}`, (error, response, body) => {
        if (!error) {
            res.status(200).send(JSON.parse(body));
        }
    });
});


//Verbos/Acciones HTTP
router.get('/', (req, res) => { // Obtiene informacion
    return res.send('Received a GET HTTP method');
});

router.post('/', (req, res) => { // Para enviar informacion
    return res.send('Received a POST HTTP method');
});

router.put('/', (req, res) => { // Para modificar informacion
    return res.send('Received a PUT HTTP method');
});

router.delete('/', (req, res) => { // Para borrar informacion
    return res.send('Received a DELETE HTTP method');
});

module.exports = router;