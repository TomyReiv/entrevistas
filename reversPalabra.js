function reversPalabra(e) {
  let revers = e.split(" ");
  console.log(revers);
  let reversMap = revers.map((palabra) => palabra.split("").reverse().join(""));
  return reversMap.join(" ");
}
console.log(reversPalabra("Hola, soy un programador"));

/* 

Dentro de la función de callback de map, utilizo el método split("") para dividir cada palabra en un array de caracteres, luego utilizo reverse() para invertir el orden de los caracteres y, finalmente, utilizo join("") para unir los caracteres invertidos en una palabra nuevamente.
Después de obtener un nuevo array con las palabras invertidas, utilizo el método join(" ") para unir las palabras en una frase nuevamente, separadas por espacios. Finalmente, devuelvo la frase invertida.
*/
