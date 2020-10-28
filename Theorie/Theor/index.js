const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.set('port', 3000); //zet die poort op 3000
app.use(express.static(__dirname + '/public'))
app.get('/', (request, response)=>{
    response.render('index', {pokemon: 'Pikachu', straat: 'Keizerstraat'});
});

app.get('/keizerstraat', (request, response)=>{
    response.type('text/plain');
    response.send('Het is hier luid')
    
});

app.use((err,req,res,next)=>{
    response.type('text/plain');
    response.status(404);
    response.send('404 not found ');

})

app.listen(app.get('port'), ()=>{
    console.log("express running");
});

//net als node js 
