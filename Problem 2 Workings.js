// Declaring the two sets of elements
const set1 = [12, 13, 6, 10];
const set2 = [13, 10, 16, 15];

// Finding the overlapping elements between the two sets:
let intersection = set1
  .filter((x) => set2.includes(x))
  .concat(set2.filter((x) => set1.includes(x)));

console.log(intersection);

// Finding the sum of the overlapping elements using the array method (solution 1)
let sum = 0;

sum = intersection.reduce((a, b) => a + b, 0);

console.log(sum);

// Finding the sum of the overlapping elements using the hash table method (solution 1)
const set3 = set1.concat(set2);

const set3Hash = Object.fromEntries([
  ...set3.reduce(
    (map, key) => map.set(key, (map.get(key) || 0) + 1),
    new Map()
  ),
]);

console.log(set3Hash);

const keyArr = [];

for (const [key, value] of Object.entries(set3Hash)) {
  if (value != 1) {
    keyArr.push(parseInt(key) * value);
    sum2 = keyArr.reduce((a, b) => a + b, 0);
  }
}

console.log(sum2);
