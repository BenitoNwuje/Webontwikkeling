const slowSum = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
            console.log(`${a} + ${b} = ${a+b}`)
        },1000)
    });
}

const slowMult = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
            console.log(`(1 + 5) * ${b} = ${a*b}`);
        },1500)
    });
}

const slowDiv = (a, b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`${a} / ${b} = ${a/b}`);
        }, 2000)
        if(b == 0 || a == 0) {
            reject('You cannot divide by zero');
        }
    });
}


slowSum(1,5)
.then(resultSum=>slowMult(resultSum,2));
slowDiv(6, 3).then(divide => console.log(divide));
slowDiv(6,0).catch(divide => console.error(divide)); 