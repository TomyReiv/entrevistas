function polindromo(palabra){
    const palabraFormateada = palabra.toLowerCase().replace(/[^a-z]/g, "");
    let reverse = palabraFormateada.split('').reverse().join('');
    return palabra === reverse;
}