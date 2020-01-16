const MongoClient = require("mongodb").MongoClient;
const request = require("request");

const url = "mongodb://localhost:27017";
const urlUsers = "https://jsonplaceholder.typicode.com/users";

MongoClient.connect(url, function(err, client) {
    if (!err) {
        console.log("Se ha establecido conección con el servidor de BD");
        const db = client.db("users");

        request(urlUsers, (err, response, body) => {
            if (!err) {
                db.collection("users").insertMany(JSON.parse(body), (err, result) => {
                    if (!err) {
                        console.log(`Se agregaron ${result.ops.length} usuarios`);
                        client.close();
                    }
                });
            }
        });

        /*db.collection("users").find({}).toArray((err, docs) => {
            console.log("USERS", docs);
            client.close();
        });*/
    }
});