function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache.hasOwnProperty(key)) {
        return cache[key];
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  