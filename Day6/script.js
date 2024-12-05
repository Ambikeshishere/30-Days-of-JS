var filter = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

const arr = [1, 2, 4, 6, 8];


const isEven = function (num) {
    return num % 2 === 0;
};

const filteredArr = filter(arr, isEven);

console.log(filteredArr); 