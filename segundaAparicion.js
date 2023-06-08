function secondSymbol(s, symbol) {
  let firstIndex = s.indexOf(symbol);
  let secondIndex = s.indexOf(symbol, firstIndex + 1);

  if (secondIndex === -1) {
    return -1;
  } else {
    return secondIndex;
  }
}

/* 
Luego, se utiliza el método indexOf nuevamente, pero esta vez se especifica el segundo parámetro como firstIndex + 1.
Esto se hace para buscar la segunda aparición de la letra a partir del índice siguiente al de la primera aparición. El índice de la segunda aparición se almacena en la variable secondIndex.

*/
