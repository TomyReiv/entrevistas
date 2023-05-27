function obtenerPares(num) {
  let resultado = [];
  for (let i = 0; i <= num.length; i++) {
    if (i % 2 == 0) {
      resultado.push(num[i]);
    }
  }
  console.log(resultado);
}

function obtenerPares2(numeros) {
  const pares = numeros.filter((numero) => numero % 2 === 0);
  return pares;
}
