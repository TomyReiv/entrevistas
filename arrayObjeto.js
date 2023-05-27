Array.prototype.groupBy = function (fn) {
    const groupedObj = {};
    for (let i = 0; i < this.length; i++) {
      const key = fn(this[i]);
      if (!groupedObj[key]) {
        groupedObj[key] = [];
      }
      groupedObj[key].push(this[i]);
    }
    return groupedObj;
  };
  