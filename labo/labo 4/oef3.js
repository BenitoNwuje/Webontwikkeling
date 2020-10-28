// Voorbeeld gebruik:
let readlineSync = require('readline-sync');
let fetch = require('node-fetch');
let oef; 
let running = false;
do {
    oef = readlineSync.question('Naar welke cocktail wil je zoeken? ');
    if(oef == ""){
        running = true;
        console.log("De zoekstring mag niet leeg zijn.")
    }
    else{
        running = false;
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+oef) //hier krijg je de ap link en hier geeft je de naam van de drink die jij zoekt
        .then(res => res.json()) //res is de data die je krijgt van die url je zegt dat res.json dat de data json is 
        .then(cocktailData => { //hier geef de data een naam genaamd cocktaildata
            for (let i = 0; i < cocktailData.drinks.length; i++) { //hier kies je voor voor de array in het json file genaamd drinks
                console.log(cocktailData.drinks[i].strDrink) //en hier zeg je dat die array een drank terug moet geven maar de naam die jij gaf aan de url en alle combinaties 

            }
        })
    }

} while (running);


