const request = require("request");
const URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

request(URL, (error, response, body) => {
    if (!error) {
        if (response.statusCode === 200) {
            console.log("Status: ", response.statusCode, JSON.parse(body));
        } else {
            console.log("Error: ", response.statusCode);
        }
    }
});