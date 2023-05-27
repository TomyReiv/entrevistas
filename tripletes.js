function threeSum(nums) {
    nums.sort((a, b) => a - b); // Ordenar la matriz de números de forma ascendente
    const triplets = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Evitar elementos duplicados en la primera posición del triplete
      }
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
  
          while (left < right && nums[left] === nums[left - 1]) {
            left++; // Evitar elementos duplicados en la segunda posición del triplete
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--; // Evitar elementos duplicados en la tercera posición del triplete
          }
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return triplets;
  }
  
  // Ejemplo de uso
  const nums = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(nums);
  console.log(result); // Output: [[-1, -1, 2], [-1, 0, 1]]
  