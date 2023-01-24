// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];
// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];
let arr1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let arr2 = [5, 6, 4];

const addTwoNumbers = function (l1, l2) {
  let number1;
  let number2;
  if (arr1[0] === 0) {
    number1 = Number(
      String(arr1.reduce((accum, digit) => accum * 10 + digit, 0))
        .split("")
        .reverse()
        .join("") + 0
    );
    if (arr1[1] === 0) {
      number1 = Number(
        String(arr1.reduce((accum, digit) => accum * 10 + digit, 0))
          .split("")
          .reverse()
          .join("") +
          0 +
          0
      );
      if (arr1[2] === 0) {
        number1 = Number(
          String(arr1.reduce((accum, digit) => accum * 10 + digit, 0))
            .split("")
            .reverse()
            .join("") +
            0 +
            0 +
            0
        );
      }
    }
  } else {
    number1 = Number(
      String(arr1.reduce((accum, digit) => accum * 10 + digit, 0))
        .split("")
        .reverse()
        .join("")
    );
  }

  if (arr2[0] === 0) {
    number2 = Number(
      String(arr2.reduce((accum, digit) => accum * 10 + digit, 0))
        .split("")
        .reverse()
        .join("") + 0
    );
    if (arr2[1] === 0) {
      number2 = Number(
        String(arr1.reduce((accum, digit) => accum * 10 + digit, 0))
          .split("")
          .reverse()
          .join("") +
          0 +
          0
      );
      if (arr2[2] === 0) {
        number2 = Number(
          String(arr2.reduce((accum, digit) => accum * 10 + digit, 0))
            .split("")
            .reverse()
            .join("") +
            0 +
            0 +
            0
        );
      }
    }
  } else {
    number2 = Number(
      String(arr2.reduce((accum, digit) => accum * 10 + digit, 0))
        .split("")
        .reverse()
        .join("")
    );
  }
  console.log(number1);
  console.log(number2);

  let sumResult = number1 + number2;
  const result = String(sumResult).split("").join(",");
  let newArr = [];
  for (let i = 0; i < result.length; i = i + 2) {
    newArr.push(parseInt(result[i]));
  }

  outputArr = newArr.reverse();

  return outputArr;
};

console.log(addTwoNumbers(arr1, arr2));
