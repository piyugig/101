function cacheFunction(functionToCache) {
  let cache = {};
  return (param) => {
    if (param in cache) {
        return cache[param];
    }
    else {
        let result = functionToCache(param);
        cache[param] = result;
        return result;
    }
  }
}

module.exports = cacheFunction;
