const num = new Array(1,2,3,4);
let total = num.reduce(
    (sum, number) => {
        return sum + number;//geeft de waorde terug aan sum
    }, 0 //dit bepaald that sum start met null
);

console.log(total);