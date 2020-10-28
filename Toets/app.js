const express = require('express');
const ejs = require('ejs');
const contact = require('./contact.json');
const app = express();
const Pokedex = require('pokedex');
let pokedex = new Pokedex();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('index')
});
app.get('/contact', (req,res) => {
    res.render('contact', {number: contact.number, email: contact.email})
});

let arrayOfPokemen = new Array();

for (let index = 1; index <= 10; index++) {
    if(pokedex.pokemon(index).weight >= 100)
    arrayOfPokemen.push(pokedex.pokemon(index));    
}
app.get('/pokemon', (req,res) => {
    res.render('pokemon', {pokemon: arrayOfPokemen})
});

app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${
    app.get('port')}; press Ctrl-C to terminate.`);
});