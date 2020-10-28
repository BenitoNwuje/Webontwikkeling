const express = require('express');
const ejs = require('ejs');
const p = require('./persoon.json'); //zo laad je een json bestand
const app = express();

const Pokedex = require('pokedex');
let pokedex = new Pokedex();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//oefening 2 + oefening 3
app.get('/', (req,res) => {
    res.render('index', {family:"Nwuje", name: p.name, image: p.image})
});

//oefening 4
app.get('/pikachu', (req,res) => {
  res.render('pokemon', {pokemon: pokedex.pokemon("pikachu")})
});
app.get('/raichu', (req, res) =>{
  res.render('pokemon', {pokemon: pokedex.pokemon("raichu")})
});

//oefening 5
let arrayOfPokemon = new Array();
for(let i = 10; i <= 14; i++){
  arrayOfPokemon.push(pokedex.pokemon(i));
}
app.get('/pokemons', (req, res) =>{
  res.render('pokemons', {pokemon: arrayOfPokemon})
});

//oefening 6
for (let index = 100; index <= 109; index++) {
  console.log(pokedex.pokemon(index).name);
  app.get(`/${pokedex.pokemon(index).name}`, (req, res) =>{

    
    res.render('pokemon', {pokemon: pokedex.pokemon(index)})
  });
}
app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${
    app.get('port')}; press Ctrl-C to terminate.`);
});