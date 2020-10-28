let calculateDogAge = (age) => {
 return calculateAnimalAge(age, 7);
}
let calculateAnimalAge = (age, conversionRatio) => {
    return age * conversionRatio;
   }

let calculateAnimalAgeFunctional = (conversionRatio) => {
   return (age) => {
    return calculateAnimalAge(age, conversionRatio);
   }
}
console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));