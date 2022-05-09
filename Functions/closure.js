//Closure is a feature of JavaScript that allows functions to remember the environment in which they were created.
const value = "Global";

function myFunction() {
  console.log(value);
}
function exec() {
  const value = "Local";
  myFunction();
}
exec();

const x = "Global";

function outside() {
  const x = "Local";
  function inside() {
    return x;
  }
  return inside;
}

const myFunc = outside();
console.log(myFunc());
