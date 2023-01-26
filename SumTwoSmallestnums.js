/* Create a function that takes an array of numbers 
and returns the sum of that two lowest positive numbers.
*/
function sumTwoSmallestNums(numbers) {
    let result = numbers.sort((a, b) => a - b)
    .slice(0, 2);
    
    var sum = 0;
    for(i = 0; i < result.length; i++){
    sum += result[i];
    }
    return sum;
    };

console.log(sumTwoSmallestNums(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNums(10, 343445353, 3453445, 3453545353453));
console.log(sumTwoSmallestNums(2, 9, 6, -1,));
console.log(sumTwoSmallestNums(879, 953, 694, -847, 342, 221, -91, -723, 791, -587));
console.log(sumTwoSmallestNums(3683, 2902, 3951, -475, 1617, -2385));