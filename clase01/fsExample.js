const fs = require("fs"); // modulo para trabajar con el file system

fs.writeFile("testFile.txt", "Hello World from FS", err => {
    if (!err) {
        console.log("File saved!");
    }
});

fs.readFile("testFile.txt", "UTF-8", (err, data) => {
    if (!err) {
        console.log("File: ", data);
    }
});