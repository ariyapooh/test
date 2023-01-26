/*
Given a number, return an array containing the two halves of the number.
If the number is odd, make the rightmost number higher.
*/

const numberSplit = (num) => {
    if (num === undefined) {
        return "input parmeter can't be empty"
    } else {
    let a = Math.floor(num / 2);
    let b = num - a;
    let c = [];
    c.push(a, b);
    return c;
    }
  };
  console.log(numberSplit(4));
  console.log(numberSplit(10));
  console.log(numberSplit(11));
  console.log(numberSplit(-9));