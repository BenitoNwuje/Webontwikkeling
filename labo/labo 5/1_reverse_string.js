let hello = (input) => {
    let splitSpring = input.split("").reverse().join("");
    console.log(splitSpring);
    return splitSpring;
}

hello("benito");

console.log("hello");
console.log(hello("hello"));
