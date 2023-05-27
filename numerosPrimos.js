function primos(numero) {
  for (let i = 2; i <= numero; i++) {
    let esPrimo = true;
    for (let j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if(esPrimo){
        console.log(i)
    }
  }
}
