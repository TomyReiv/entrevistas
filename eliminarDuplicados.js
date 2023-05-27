function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Caso especial cuando la matriz está vacía
  
    let uniqueIndex = 0; // Índice para rastrear el lugar donde colocar los elementos únicos
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[uniqueIndex]) {
        // Encuentra un elemento único, muévelo al siguiente lugar único en la matriz
        uniqueIndex++;
        nums[uniqueIndex] = nums[i];
      }
    }
  
    // La longitud de la matriz única es uniqueIndex + 1
    return uniqueIndex + 1;
  }

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  
  // usage example:
  var a = ['a', 1, 'a', 2, '1'];
  var unique = a.filter(onlyUnique);
  
  console.log(unique); // ['a', 1, 2, '1']