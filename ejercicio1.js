const numero = [];
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 == 0) {
        numero.push(i);
        let total = numero.reduce((a, b) => a + b, 0);
        console.log(total);
    }
};
