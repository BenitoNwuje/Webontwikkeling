const fetch = require('node-fetch');
const doFetch = async () => {
    try {
        let result = await fetch('https://icanhazdadjoke.com/search?term=dog&limit=5&page=1', {
            headers: {
                'Accept': 'application/json'
            }
        })
        let response = await result.json();
        console.log(response.results[0].joke);
        console.log(response.results[1].joke);
        console.log(response.results[2].joke);
        console.log(response.results[3].joke);
        console.log(response.results[4].joke);        
    }
    catch(exc) {
        console.log('error');
    }
}
doFetch();
console.log("code done");
