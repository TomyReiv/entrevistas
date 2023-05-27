var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n; // Ajustar k si es mayor que la longitud de la matriz
  
    // Rotar la matriz en tres pasos inversos
    reverse(nums, 0, n - 1); // Paso 1: Invertir todos los elementos
    reverse(nums, 0, k - 1); // Paso 2: Invertir los primeros k elementos
    reverse(nums, k, n - 1); // Paso 3: Invertir los elementos restantes
  
    return nums;
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      // Intercambiar elementos start y end
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
  
      start++;
      end--;
    }
  
  };