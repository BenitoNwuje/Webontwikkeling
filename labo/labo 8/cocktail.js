const fetch = require('node-fetch');

let a = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then(response => response.json())
let b = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then(response => response.json());
let c = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then(response => response.json());

Promise.all([a, b, c]).then(
    values => {
        console.log(JSON.stringify(values[0].drinks[0].strDrink));
        console.log(JSON.stringify(values[1].drinks[0].strDrink));
        console.log(JSON.stringify(values[2].drinks[0].strDrink));
});
