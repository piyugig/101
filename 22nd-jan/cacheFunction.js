Utils = {
  memoize: function (param) {
    if (param in this.obj.cache) {
      return this.obj.cache[param];
    }
    else {
      let result = this.obj.fn(param);
      this.obj.cache[param] = result;
      return result;
    }
  }

}

function cacheFunction(functionToCache) {

  obj = Object.create(Utils);
  obj.cache = {};
  obj.fn = functionToCache;

  return obj.memoize;
}

module.exports = cacheFunction;