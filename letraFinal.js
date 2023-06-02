function pigIt(str) {
  let result = str
    .split(" ")
    .map((palabra) => {
        const punctuationRegex = /[.,!?]/;
      if (punctuationRegex.test(palabra)) {
        return palabra;
      } else {
        let primeraLetra = palabra.charAt(0);
        let nuevaPalabra = palabra.split("");
        nuevaPalabra.push(primeraLetra, "ay");
        nuevaPalabra.shift();
        return nuevaPalabra.join("");
      }
    })
    .join(" ");

  return result;
}

console.log(pigIt("Hola Mundo !"));
