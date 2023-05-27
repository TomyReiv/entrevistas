var reduce = function(nums, fn, init) {
    let res;
    if (nums.length === 0) {
      return res = init;
    } else {
      let acc = init;
      for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
      }
      return acc;
    }
  };
  