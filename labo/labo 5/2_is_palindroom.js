let isPalindroom = (palinDroom) => {
    let splitSpring = palinDroom.split("").reverse().join("");
    if(palinDroom === splitSpring){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindroom("kok"));
console.log(isPalindroom("ben"));
console.log(isPalindroom("lepel"));