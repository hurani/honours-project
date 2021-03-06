function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let demoArray = [5, 10, 15, 20, 25];
console.log(sumArray(demoArray));

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

demoArray = [5, 5, 1, 1, 2, 1, 3, 8, 3];
console.log(removeDuplicates(demoArray));
