const numb = [1, 2, 3, 4];

const ob = {
    name: "Benito",
    age: 21,
    city: "Deurne",
    childOfYah: true
};
for (const numbers in numb) {
    console.log(numbers);
}
for(const num of numb){
    console.log(num);
}



ob.forEach(element => {
    console.log(element)
});


