const arr = [3,2,12,22,4,333,44,53,75];
let result = arr
    .map(e=>e*3)
    .filter(e => e > 50)
    .reduce(
        (sum,e) => sm + e
    )

console.log(result);