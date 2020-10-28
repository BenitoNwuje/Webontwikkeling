const spaces = (n) => {
    if(n < 0) return "error";
    if(n === 1) return ' ';
    return ' '+ spaces(n - 1);
}

spaces(4)

console.log(spaces(5) + 'hey');
