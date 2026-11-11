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
