var removeElement = function (nums, val) {

    let k = 0; // Variable para contar los elementos que no son iguales a val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;

};