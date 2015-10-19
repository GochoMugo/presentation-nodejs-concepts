// demonstrating callbacks

// this function accepts a callback
function asyncFunc(callback) {
  // start a timer that will invoke the callback after 3000 ms (3 sec);
  setTimeout(callback, 3000);
}

// using this function as the callback for the above function
function helloWorld() {
  console.log("hello, world");
}

// invoke the function, with the callback
asyncFunc(helloWorld);

