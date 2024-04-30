/* Usando Node Http */

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('requirimiento entrante');

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Hello world</h1>');
});

// funciones anonimas
// () => {};

server.listen(3005);