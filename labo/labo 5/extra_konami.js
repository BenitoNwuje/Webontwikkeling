const readline = require('readline');

let konamikey = ["a","b","a","b"];
let attempt = new Array();
let counter = 0;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.name == konamikey[counter]) {
        attempt.push(key.name);
        counter++;
    }
    else
    {
        counter = 0;
        attempt = [];
    }

    if (JSON.stringify(attempt) == JSON.stringify(konamikey)) {
        process.exit();
    }
})