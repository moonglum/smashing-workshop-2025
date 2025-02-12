/** Prior Art */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, World!');
  }, 1000);
});

promise.then(value => {
  console.log('Promise resolved with:', value);
}).catch(error => {
  console.error('Promise rejected with:', error);
});


/** Now */

const { promise, resolve, reject } = Promise.withResolvers();

// Using the promise
promise.then(value => {
  console.log('Promise resolved with:', value);
}).catch(error => {
  console.error('Promise rejected with:', error);
});

// Resolving the promise
setTimeout(() => {
  resolve('Hello, World!');
}, 1000);
