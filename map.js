Array.prototype.map = function (cb) {
  newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
};
