const sum = (arr) => {
    if(arr.length === 0) {
        return 'error lege array';
    }
    if(arr.length === 1) {
        return arr[0];
    }
    return arr.pop() + sum(arr)
}

let array = [1, 2, 3,4,5,6]

console.log(sum(array));