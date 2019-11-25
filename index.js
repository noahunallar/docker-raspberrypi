'use strict'
const http = require('http');
const port = 80;

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello Node.js server! - ' + new Date().toISOString());
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is listening on ${port}`);
});
