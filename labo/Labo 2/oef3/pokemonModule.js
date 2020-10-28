let Pokedex = require('pokedex');
let pokedex = new Pokedex();

exports.printPokemonBetween = (from, to) => {
    for (let index = from; index <= to; index++) {
        console.log(`${pokedex.pokemon(index).id}: ${pokedex.pokemon(index).name}`);
        //met deze code geven wij onze pokemon een parameter en met .id zegen dat bv willen wij de Id van pokemon 5 en de naam van deze pokemon die deze id nummer heeft.

    }
}

