let a = 1, b = 3, c = 4;
console.log(a+b+c);
let myArray = new Array(1, 4, 5);
let sum = 0;
for(let i = 0; i < myArray.length; i++){
    sum += myArray[i];
}
console.log(sum);
sum = 0;
myArray.forEach((num) => {
    sum += num;
});
console.log(sum+1);
