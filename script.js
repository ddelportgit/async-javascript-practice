console.log("Starting");

setTimeout(function () {
  console.log("This appears after 2 seconds");
}, 2000);

console.log("Finished");

// Promises

const myPromise = new Promise(function (resolve) {
  resolve("JavaScript is working!");
});

myPromise.then(function (result) {
  console.log(result);
});

// promise 2

const myPromise2 = new Promise(function (resolve, reject) {
  reject("Something went wrong!");
});

myPromise2
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// async await

async function getUser() {
  return "User loaded successfully!";
}

getUser().then(function (result) {
  console.log(result);
});

// async await 2

function getProduct() {
  return new Promise(function (resolve) {
    resolve("Product loaded successfully!");
  });
}

async function displayProduct() {
  const product = await getProduct();

  console.log(product);
}

displayProduct();
