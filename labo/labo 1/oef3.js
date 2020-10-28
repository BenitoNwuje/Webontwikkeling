const http = require('http');
const port = 1337;
let i = 0;
const server = http.createServer((request, response) => {
    i++;
    console.log(request.headers); //geeft info terug over je browser en operating system
    //content type applicatie/json geeft aan dat de webserver json kan terug geven 
    response.writeHead(200, {'Content-Type':'application/json'});
    //json stringify converteert json objecten naar string 
    response.write(JSON.stringify({Name:"Benito", Achternaam:"Nwuje", teller: i}));
    response.end();
});

server.listen(port);