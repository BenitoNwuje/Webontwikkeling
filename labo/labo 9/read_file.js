var fs = require('fs');

const itsRead = new Promise((resolve, reject) => {
    fs.readFile('email.txt', 'utf8', function(err, contents) {
        if(err === null ){
            resolve('done');
            console.log(contents);
        }
        else{
            reject('not done')
        }
    });  
});

let test = async() => {
    try{
        let result = await itsRead;
        console.log(result);
    }
    catch(exc){
        console.log(exc);
    }
}
test();


