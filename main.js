const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(moment().format());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
    console.log(data);
    fs.writeFile("text2.txt", data, (err) => {
        if (err) console.log(err);
        console.log("Done")
    });

})

var moment = require('moment'); 

