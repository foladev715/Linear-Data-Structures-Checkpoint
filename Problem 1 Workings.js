// Declaring the two sets of elements
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Finding the distinct elements between the two sets:
let difference = set1
  .filter((x) => !set2.includes(x))
  .concat(set2.filter((x) => !set1.includes(x)));

console.log(difference);

// Finding the sum of the distinct elements using the array method (solution 1)
let sum = 0;

sum = difference.reduce((a, b) => a + b, 0);

console.log(sum);

// Finding the sum of the distinct elements using the hash table method (solution 2)

const set3 = set1.concat(set2);

const set3Hash = Object.fromEntries([
  ...set3.reduce(
    (map, key) => map.set(key, (map.get(key) || 0) + 1),
    new Map()
  ),
]);

const keyArr = [];

for (const [key, value] of Object.entries(set3Hash)) {
  if (value === 1) {
    keyArr.push(parseInt(key));
    sum = keyArr.reduce((a, b) => a + b, 0);
  }
}

console.log(sum);
