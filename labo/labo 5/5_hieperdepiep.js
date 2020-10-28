let hieperdepiep = (age, callback) => {
    let string = "Hieperdepiep";
    for (let i = 1; i <= age; i++) {
        string+= "depiep";
        console.log(string + " Hoera")
    }
    callback();

}

hieperdepiep(5, () => {
    console.log('Happy Birthday'); 
});