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
    try {
        //connect to the mongoDB cluster
        await client.connect();
       let cursor = await client
        .db(DATABASE)
        .collection(POKEMON_COLLECTION)
        .find(); //laat geeft alle documenten van een query terug
        let result = await cursor.toArray(); //geeft een promise terug om naar een array om te zetten
        return result;
    } catch (error) {
        console.log('Er is an error');
        console.log(error);    
    }
    finally {
        console.log('Code is gedaan');
        await client.close();
    }
}

const getPokemonById = async(client, id) => {
    try {
        //connect to the mongoDB cluster
        await client.connect();
       let result = await client
        .db(DATABASE)
        .collection(POKEMON_COLLECTION)
        .findOne(); //laat de eerste document zien in een collection
        return result;
    } catch (error) {
        console.log('Er is an error');
        console.log(error);    
    }
    finally {
        console.log('Code is gedaan');
        await client.close();
    }
}

const getPokemonWithMinimumWeight = async(client, weight) => {
    try {
        //connect to the mongoDB cluster
        await client.connect();
       let cursor = await client
        .db(DATABASE)
        .collection(POKEMON_COLLECTION)
        .find({weight:{$gte:weight}}); //laat geeft alle documenten van een query terug die gelijk is of groter dan weight
        let result = await cursor.toArray(); //geeft een promise terug om naar een array om te zetten
        return result;
    } catch (error) {
        console.log('Er is an error');
        console.log(error);    
    }
    finally {
        console.log('Code is gedaan');
        await client.close();
    }
}

const getPokemonWithMaximumHeight = async(client, height) => {
    try {
        //connect to the mongoDB cluster
        await client.connect();
       let cursor = await client
        .db(DATABASE)
        .collection(POKEMON_COLLECTION)
        .find({height:{$eq:height}}); //laat geeft alle documenten van een query terug die gelijk is aan 
        let result = await cursor.toArray(); //geeft een promise terug om naar een array om te zetten
        return result;
    } catch (error) {
        console.log('Er is an error');
        console.log(error);    
    }
    finally {
        console.log('Code is gedaan');
        await client.close();
    }
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