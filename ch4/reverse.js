var array = [1,2,3,4,5];
function num(x) {
  let arr = [];
  for (let i = x.length - 1; i >= 0; i--) {
    arr.push(x[i]);
  }
  return arr;
}
console.log(num(array));


var array = [1, 2, 3, 6];
function num(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.unshift(x[i]);
  }
  return arr;
}
console.log(num(array));