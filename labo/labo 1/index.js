const http = require('http');
const port = 3000;

let i = 0;
const server = http.createServer((request, response) => {
    i++;
    console.log(request.headers);
    response.writeHead(200, {'Content-Type':'application/json'});
    response.write(JSON.stringify({voornaam: 'Andie', achternaam: 'Similon', called: i}));
    response.end();
});

server.listen(port);
console.log('De server is opgestart op poort ' + port);