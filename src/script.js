const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map implementation
// ourMap(function(element, index, array) { /* … */ }, thisArg)
/* useful for performing mathematical operations on each item in an array,
 or any time you want a new array of values modified by a function. */

Array.prototype.ourMap = function (cb) {
  const mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    cb(mappedArr.push(this[i]), i, this);
  }
};

const result = arr.ourMap((val, idx, arr) => {
  console.log('value: ' + val + ' || index: ' + idx + ' || input Arr: ' + arr);
});

console.log(' ');

// filter implementation
// filter(function(element, index, array) { /* … */ }, thisArg)
/* takes a function as a predicate and returns a new array with all the values that passes the predicate. */
Array.prototype.ourFilter = function (cb) {
  const filterredArr = [];
  for (let i = 0; i < this.length; i++) {
    const verify = cb(this[i], i, this);
    if (verify) {
      filterredArr.push(this[i]);
    }
  }
  return filterredArr;
};
const result2 = arr.ourFilter(element => element > 5);
console.log('result of our filter function: ', result2);

console.log(' ');

// reduce implementation
// reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)
/* Applies a function against an accumulator and each element 
in the array (from left to right) to reduce it to a single value. */
Array.prototype.ourReduce = function(cb, initVal) {
  let addition = initVal === undefined ? 0 : initVal;
  for (let i = 0; i < this.length; i++) {
    addition = cb(addition, this[i], i, this);
  }
  return addition;
};

const result3 = arr.ourReduce((acc, currVal) => {
  return acc + currVal;
},0);
console.log('result of our reduce function: ', result3);

