const {MongoClient} = require('mongodb');
const fetch = require('node-fetch');
const express = require('express');
const app = express();

const CONNECTION_URI = 'mongodb+srv://BenitoNwuje:P@ssw0rd@firstcluster0-e3dfb.mongodb.net/test?retryWrites=true&w=majority';
const DATABASE = 'WebOntwikkeling';
const POKEMON_COLLECTION = 'Pokemon';


const loadAllPokemonIntoDatabase = async(client) => {
    let pokemon = []; //maakt een array aan 
    for(let i = 1; i <= 10; i++){ //maakt een for loop om alle 10 pokemons te kunnen steken in onze pokemon array:
      let response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) //hier fetchen wij data van de pokeapi
      let json = await response.json(); //hier geven wij aan dat onze fetch data json is 
      //je maakt een nieuwe object aan en steek ze in de pokemon array
      pokemon.push({_id: json.id, name: json.name, height: json.height, weight: json.weight})    //hier steken wij onze fetch data in onze pokemon array in de juiste object veld   
    }
    await client 
        .db(DATABASE)
        .collection(POKEMON_COLLECTION)
        .deleteMany({}); // hier geven wij aan dat onze collection leeg moet zijn
    await client
        .db(DATABASE)
        .collection(POKEMON_COLLECTION)
        .insertMany(pokemon);   // Hier geven wij aan dat onze collection gevulled moet zijn met de pokemons in de pokemon array
}

const getAllPokemon = async(client) => {
    return [];
}

const getPokemonById = async(client, id) => {
    return undefined;
}

const getPokemonWithMinimumWeight = async(client, weight) => {
    return [];
}

const getPokemonWithMaximumHeight = async(client, height) => {
    return [];
}

(async () => {
    let client = new MongoClient(CONNECTION_URI, { useUnifiedTopology: true }); //maakt een nieuwe client aan
    await client.connect(); //wacht tot dat er een verbinding is gemaakt met de database 
    await loadAllPokemonIntoDatabase(client); //wacht tot dat deze methoden klaar is. 
    app.get('/pokemon', async(req,res) => {
        if (req.query.weight) {
            let pokemon = await getPokemonWithMinimumWeight(client, Number.parseInt(req.query.weight));
            res.send(pokemon);
        } else if (req.query.height) {
            let pokemon = await getPokemonWithMaximumHeight(client, Number.parseInt(req.query.height));
            res.send(pokemon);
        } else {
            let pokemon = await getAllPokemon(client);
            res.send(pokemon);
        }
    });

    app.get('/pokemon/:id', async(req,res) => {
        let pokemon = await getPokemonById(client, Number.parseInt(req.params.id));
        if (pokemon) {
            res.send(pokemon);
        } else {
            res.status(404);
            res.send({message: 'pokemon not found.'});
        }
    });

    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });

    process.on('SIGINT', async() => {
        try {
            await client.close();
        } catch (e) {
        }
        process.exit();
    });
})();