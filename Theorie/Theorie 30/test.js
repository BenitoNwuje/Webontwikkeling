let data = undefined;
let fakeFetch = (callback) => {
    setTimeout(() => {
        data = {name:'benito', age:'39'}
        console.log('data is klaar');
        callback();
    }, 
    2000);
}
fakeFetch(
() => {console.log('daa content:' + JSON.stringify(data));}
);
