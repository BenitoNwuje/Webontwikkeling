const sum = (n) => {
    let sum = 0;
    if(n < 0) {
        return 'error';
    }
    if(n === 1){
     return 1;
    }
    if(n === 0){
        return 0;
       }
    return n + sum(n -1)
}

console.log(sum(2))
console.log(test(2))