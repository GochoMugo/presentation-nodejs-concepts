// variables: hold value the can change during runtime
let integerVar  = 1;
let floatVar    = 1.0;
let booleanVar  = true;    // booleans: true, false
let objectVar   = { key: "value" };
let functionVar = function() { return "value"; };

// constants: hold value that can NOT change during runtime
const constant  = "forfuture";

// another way to define functions
// it has it benefits: hoisting
function anotherFunction(arg1, arg2) {
  return arg1 + arg2;
}

