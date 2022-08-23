function calcRemainder(first, second) {
  return first % second;
}

console.log(calcRemainder(5, 6)); //5

function isOdd(number) {
  return number % 2 !== 0;
}

console.log(isOdd(5));

function booleanInteger(number) {
  return number % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(3));

function isLoggedInAndSubscribed(login, subscribe) {
  return login === "LOGGED_IN" && subscribe === "SUBSCRIBED" ? true : false;
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

function isLoggedInAndSubscribed2(login, subscribe) {
  return login === "LOGGED_IN" || subscribe === "SUBSCRIBED" ? true : false;
}

console.log(isLoggedInAndSubscribed2("LOGGED_OUT", "SUBSCRIBED"));
