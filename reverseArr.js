module.exports = function reverseArr(arr) {
  let newArr = []
  for (var i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}
