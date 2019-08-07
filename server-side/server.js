const fs = require('fs');
const http = require('http');
const fileOne = fs.readFileSync('../public/index.json', 'utf-8');
// const data = JSON.parse(fileOne);

// web server with the http module //
// Only covering GET requests //

const server = http.createServer((req, resp) => {
    let reqPath = req.url;
    if (reqPath === '/' || reqPath === '/index') {
        resp.writeHead(200, {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        })
        resp.end(fileOne);
    } else {
        resp.writeHead(404);
        resp.end('<h1>Page not Found</h1>');
    }
});

// start the server and listen
server.listen(8000, '127.0.0.1', () => {
    console.log('Welcome to V\'s server');
    console.log('Running on localhost:8000...Listening!!');
})