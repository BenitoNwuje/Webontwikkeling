let numbers = [33,2,12,4];

let locaties = [
    {
        name:'gemeentehuis',
        age: 142,
    },
    {
        name:'school',
        age:10
    },
    {
        name:'stadhuis',
        age: 200
    }
];
numbers.sort((a,b) =>{
    if(a < b) return-1;
    if(a > b) return +1;
    return 0;
})


console.log(numbers);

locaties.sort((a,b) =>{
    if(a.name < b.name) {
        if(a.age < b.age) {
            return-1;
        }
    }
    if(a > b) return +1;
    return 0;
})