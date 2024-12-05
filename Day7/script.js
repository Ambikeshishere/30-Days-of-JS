var reduce = function(nums, fn, init) {
    return nums.reduce(fn, init);
};


const numbers = [1, 2, 3, 4, 5];


const sum = function(accumulator, currentValue) {
    return accumulator + currentValue;
};

const result = reduce(numbers, sum, 0);

console.log(result); 
