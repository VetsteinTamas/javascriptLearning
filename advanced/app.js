function showRating(rating) {
  let ratingString = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingString += "*";
    if (i !== Math.floor(rating - 1)) {
      ratingString += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratingString += " .";
  }
  return ratingString;
}

console.log(showRating(5.5));

function sortLowToHigh(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}

console.log(sortLowToHigh([5, 2, 1]));

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => {
    return b.price - a.price;
  });
}

console.log(
  sortHighToLow([
    { id: 5, price: 50 },
    { id: 3, price: 0 },
    { id: 2, price: 500 },
  ])
);

async function todos() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const objects = await result.json();
  const posts = objects
    .filter((element) => element.completed === false)
    .slice(0, 6);
  console.log(posts);
}
//first 6
todos();
