console.log("Hello Guys!");

/* Data types and Variables */
/* String / Number / Boolean / Undefined / Null */

/* A) String */

console.log("Hello World and Aliens."[0]); /* 1st character */
console.log("Hello World and Aliens"[21]); /* last character */
console.log("Hello World".length); /* String length */

let str = "Tamás"; /* Variable */
console.log(str[0]); /* str variable first character */
console.log(str[str.length - 1]); /* str variable last character */

console.log(typeof str); /* Getting the type of a variable */

/* B) Number + Boolean */

let number = 10.5;
let number2 = 12;
let number3 = -123;

let sum = number + number2 + number3;
console.log(sum); /* sum */

console.log(number > number2); /* Boolean true or false */

// C) Null and Undefined

console.log("DAVID" / 5);

// Variables

/**
 * var -- Don't use this.
 * let
 * const
 */

/* Examples */

let name = "Tamás";
let fullName = "Vetstein Tamás";
let isRaining = true;
let temperature = 38;

temperature = 22;
console.log(temperature); /* Modified temperature | 38 -> 22 */

const isPainful = true;
/* isPainful = false;  */ /* CONST cannot be modified! */

/* Exercise Celsius to Fahrenheit */

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(celsius + " Celsius - > " + fahrenheit + " fahrenheit");

/* Equality */

/* == values vs === values and types */

let bool = "1" === 1;
console.log(bool); /* false, not the same type */

console.log(bool !== 1); /* true because type is not the same */

/* CONDITIONALS */

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("Show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("Don't show the video, tell user to log in");
}

let cash = 50;
let price = 40;

if (cash > price) {
  console.log("you paid extra - here's your change: " + (cash - price));
} else if (cash === price) {
  console.log("You paid the exact amount, have a nice day.");
} else {
  console.log(
    "Not enough money - you still owe " + (price - cash) + " dollars"
  );
}

/* Logical operators */
/* && -> if one is false, it returns false */
let money = 70;
let salePrice = 40;
let isStoreOpen = true;

if (money >= salePrice && isStoreOpen === true) {
  /* only if both true, this won't run */
  console.log("We have enough cash to buy the product");
}

/* || -> if one is true, it returns true */

if (money >= salePrice || isStoreOpen /*this checks if true */) {
  /* runs, because one is true */
  console.log("We have enough cash to buy the product");
}

/* Falsy values -> undefined, null, NaN, 0, "", false -> return false when checked as boolean */

/* Ternary operators, easier if condition, one line */

let isObese = true;

/* left side true, right false */

isObese ? console.log("He is obese") : console.log("He is healthy");

let subscription = subscribed || loggedIn ? "Show the video" : "Hide the video";

console.log(subscription); /* show the video */

/* cash exercise */

cash >= price && isStoreOpen
  ? console.log("give receipt")
  : console.log("dont give receipt");

/* ---------- LOOPS ----------- */
/**
 * for
 * while
 * do while
 */

/* let count = 1; */

/* while (count <= 100) {
  console.log(count);
  count = count + 1;
} */

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

/* exercise */
/* 
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Frontend Simplified");
  } else if (i % 3 === 0) {
    console.log("Frontend");
  } else if (i % 5 === 0) {
    console.log("Simplified");
  } else {
    console.log(i);
  }
} */

/* exercise 2 */

/* const string = "Frontend Simplified";

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}
 */
/* FUNCTIONS */

function welcomeToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}`);
}

welcomeToFES("Tamás", "Vetstein");

function fn() {
  return 6;
}
/* return exits the function */
console.log(fn()); /* known as number, shows 6 */

/* exercise */

/* function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
*/

const convertCelsiusToFahrenheit = (celsius) => /* this is arrow */ {
  return celsius * 1.8 + 32;
};

console.log(convertCelsiusToFahrenheit(34));

/* ARRAYS */

/* DON'T DO THIS. 
let item1 = 20;
let item2 = 30;
let item3 = 40;
let item4 = 50; */

let arr = [20, 30, 40, 50]; /* this is the way */

console.log(arr[0]); /* first element */
console.log(arr[arr.length - 1]); /* last element */

arr.push(100); /* adds 100 to the end */
console.log(arr);

let newArr = arr.filter(
  (element) => element < 50
); /*  callback function, this iterates  */

console.log(newArr); /* IF RETURNS TRUE, it adds it to the newArr */

/* exercise */

let grades = ["A+", "A", "FAIL"];

let newArr2 = grades.filter((element) => element !== "FAIL");
console.log(newArr2);

/////

let newArr3 = [];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] !== "FAIL") {
    newArr3.push(grades[i]);
  }
}

console.log(newArr3);

/////

let arr2 = [1, 4, 9, 16];
/* this also loops through, but you can turn element into something */
let newArray3 = arr.map((element) => undefined);

console.log(newArray3);

/* exercise */

let dollars = [1, 5, 10, 3];

let dollarChanger = dollars.map((element) => element * 100);
console.log(dollarChanger);

let centDollar = [];

for (let i = 0; i < dollars.length; i++) {
  centDollar.push(dollars[i] * 100);
}

console.log(centDollar);

/* objects */

let users = [
  {
    username: "Tomaseltas",
    email: "realmadrid.vetstein@gmail.com",
    password: "test123",
    subscriptionStatus: "Premium",
    discordId: "Toks#6345",
    lessonsCompleted: [0, 1, 4, 12],
  },
  {
    username: "David",
    email: "realmadrid.david@gmail.com",
    password: "David123",
    subscriptionStatus: "Premium",
    discordId: "David#6345",
    lessonsCompleted: [0, 1, 4, 11],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("Log the user in  the details are correct");
      } else {
        console.log("Password is incorrect");
      }
      return;
    }
  }
  console.log("Could not find an email that matches");
}

login("realmadrid1.vetstein@gmail.com", "test123");

/* same operations can work */
console.log(users[0].lessonsCompleted.map((elem) => elem * 2));

/* exercise */

let user = {};

function register(
  username,
  email,
  password,
  subscriptionStatus,
  discordId,
  lessonsCompleted
) {
  user.username = username;
  user.email = email;
  user.password = password;
  user.subscriptionStatus = subscriptionStatus;
  user.discordId = discordId;
  user.lessonsCompleted = lessonsCompleted;
  users.push(user);
}

register(
  "Boris",
  "boris@gmail.com",
  "boris123",
  "Vip+",
  "Boris#7128",
  [5, 7, 11]
);

console.log(users);

/* DOM */

//First way, USE DEFER

console.log(
  (document.querySelector("#title").innerHTML += "Frontend Simplified")
);

//Second way for ID

console.log(document.getElementById("title"));

//Change css

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme");
}
