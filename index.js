let sumItems = arr => {
  let total = 0;
  arr.forEach(subArr => {
    if (Array.isArray(subArr)) {
      total += sumItems(subArr);
    } else {
      total += subArr;
    }
  });
  return total;
};
/**
if its not array return its value upwards
Array.isArray(input)==false{
  return input
}
*/

// Sum all the numbers in the array

arr = [1, [2, 3], 4, 5];
console.log(sumItems(arr));

module.exports = sumItems;
