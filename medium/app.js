function filterOutFalsy(first, second) {
  return !first ? first : second;
}

console.log(filterOutFalsy(null, "yes"));

function arrLength(arr) {
  return arr.length;
}

console.log([1, 2, 3]);

function lastElement(arr) {
  return arr[arr.length - 1];
}

console.log(lastElement([1, 2, 0]));

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum([556, 23, 15]));

function progressiveSum(number) {
  let sum = 0;
  for (let i = number; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(progressiveSum(3));

function calcTime(second) {
  let minute = Math.floor(second / 60);
  let timerSecond = second % 60;
  if (minute.toString().length === 1) {
    return "0" + minute + ":" + timerSecond;
  }
  return minute + ":" + timerSecond;
}
console.log(calcTime(4940));

function getMax(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}

console.log(getMax([5, 123, 7, -12, 64]));

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseString("sex"));

function convertToZeroes(arr) {
  return arr.map((elem) => 0);
}

console.log(convertToZeroes([2, 3, 4]));

function removeApples(arr) {
  return arr.filter((notApple) => notApple !== "Apple");
}

console.log(removeApples(["Orange", "Apple", "Apple"]));

function filterOutFalsy2(arr) {
  return arr.filter((notFalsy) => !!notFalsy === true);
}

console.log(filterOutFalsy2(["Yes", "", [], 0, null, undefined]));

function convertToBoolean(arr) {
  return arr.map((elem) => !!elem);
}
console.log(convertToBoolean([500, 0, "David", "", []]));
