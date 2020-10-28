const fibonacci = (n) => {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

for (let i = 0; i < 21; i++) {
    console.log(fibonacci(i));  
}