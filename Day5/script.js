
var map = function(arr, fn) {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++){
        transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
};

const numbers = [1, 2, 3, 4];
const squared = map(numbers, (num) => num * num);
console.log(squared); 
