let starterPokemonGen1 = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];

//is de spread methode wat spread is doet maakt jouw arrays niet meer appart maar samen 1 array
let starters = [...starterPokemonGen1, ...starterPokemonGen2];
//console.log(starters);
//is de map methode is een functie maken die een array gebruikt als parameter en met die waarde 
let names = starters.map(e => e.name);
// console.log(names);
//is de filter methode is een functie die gebruikt maakt van soor van if statment
let weakPokemon = starters.filter(e => e.xp < 40);
// console.log(weakPokemon)
let weakPokemonNames = starters
    .filter(e => e.xp < 40)
    .map(e => e.name);
// console.log(weakPokemonNames);


let sumOfAllXp = starters.reduce((sum, e) => {
    return sum + e.xp;
}, 0); //zodat de sum begint op nul
 console.log(sumOfAllXp);

let strongestPokemon = starters.reduce((pokemon, e) => {
    if(pokemon.xp < e.xp)
        return e; //  { name: 'Bulbasaur', xp: 30, type: 'grass' },
    return pokemon;
}, {name: '', xp:-1, type: ''})
console.log(strongestPokemon.xp)

let sumOfAllXpOfWeakPokemon = starters
    .filter( e => e.xp < 40)
    .reduce((sum, e) => sum + e.xp,0);
console.log(sumOfAllXpOfWeakPokemon)

let sortedStarters = starters.sort((a , b) => {
    if(a.xp< b.xp) return -1;
    if(a.xp> b.xp) return 1;
    if(a.name < b.name) return 1;
    if(a.name > b.name) return -1
    return 0; }
)
console.log(sortedStarters)