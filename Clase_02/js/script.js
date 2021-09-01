/**
 * Function with delegated execution
 */
function test() {
  console.log("This is");
  setTimeout(() => {
      console.log("function with delegated execution");
  }, 2000);
  console.log("a ");
}

/**
 * Expressed function
 */
let x = function greet() {
  console.log("This is an Expresed function.");
}

/**
 * Declared function
 */
function greetAgain() {
  console.log("This is a Declared function");
}

/**
 * Lambda function
 */
let z = () => {
  console.log("This is a Lambda function");
}