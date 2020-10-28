// http-module importeren
// require laadt de bibliotheek 'http' in
const http = require('http');

// het adres van de webserver localhost (= server draaiend op eigen computer)
// poort 9000 is een zelfgekozen nummer van een vrije poort
const hostname = '127.0.0.1';
const port = 9000;

// maakt een webserver door functie 'createServer' aan te roepen van de 'http'-bibliotheek. Neemt een handler methode aan met 2 parameters:
// het request en response object.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello AP');
});

// laat de webserver luisteren op de aangegeven poort en adres.
server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port);
});