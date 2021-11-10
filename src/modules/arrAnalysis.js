function calcMax(numArr) {
  let max = numArr[0];
  numArr.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

function calcMin(numArr) {
  let min = numArr[0];
  numArr.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

function calcAverage(numArr) {
  let sum = 0;
  numArr.forEach((num) => {
    sum += num;
  });
  return sum / numArr.length;
}

function analyze(numArr) {
  let obj = {
    average: calcAverage(numArr),
    min: calcMin(numArr),
    max: calcMax(numArr),
    length: numArr.length,
  };
  return obj;
  // returns an object that contains the following:
  // average num
  // min num
  // max num
  // length of array
}

export default analyze;
