let items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

const search = (items, number) => {
    for (let index = 0; index < items.length; index++) {
        if (items[index] == number) {
            return index;
        }        
    }
}

console.log(search(items, 5)); // 1 
console.log(search(items, 15)); // 6
console.log(search(items, 2)); // 0