const statusRef = document.querySelector(".status");

//1. then
/* fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    emailRef.innerHTML = data.email;
  }); */

//2. async/await -- preferred
/* async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  emailRef.innerHTML = data.email;
  console.log(data);
}

main(); */

/* exercise */
function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("what");
    }, 200);
  });
}
//1.then
/* getSubscriptionStatus().then((response) => console.log(response)); */
//2.async
/* async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

main();
 */
/* exercise */

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("Show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("Show Trailer");
    } else {
      reject("No video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  } catch (e) {
    console.log(e);
    statusRef.innerHTML = e;
  }
}

main();
