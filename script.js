// Lexical Scope:
// A function we're creating and inside
// that we're creating a variables and inside that
// function we're creating another function and
// inside that function we're using the variables
// that we've declared in the parent function.

// Example:
function parentFun() {
  let value = 10;
  function childFun() {
    console.log(value);
  }
  childFun();
}

parentFun();

// Global Scope.
// When we're declaring the variables in the
// Global scope using let, const or when
// we're declaring the variables using var in
// both conditions variables will be in the Global scope.
// Example:

let GlobalVar = 10;
const GlobalVar2 = 5;
var GlobalVar3 = 15;

// or

if (true) {
  var GlobalVar00 = 99;
}

console.log(GlobalVar00);

// but i'll not work inside the function

function GlobalFun() {
  var gbVariable = 55;
}

try {
  console.log(gbVariable); // ❎
} catch {
  console.log(Error());
}
// Note: these all are the conditions that works in Global scope.

// Local Scope
// A variables which we're declaring inside  the functions/blocks called Local scope variables.
// Example:

function localFun() {
  let localVar = "Ahmad";
  console.log(localVar); // ✔
}

localFun();
try {
  console.log(localVar); // ❎
} catch {
  console.log(Error());
}
// Block scope.
if (true) {
  var blockVar = 44;
  let localVar2 = "ali";
  console.log(localVar2); // ✔
}

try {
  console.log(localVar2); // ❎
} catch {
  console.log(Error());
}
console.log(blockVar); // works

// using  for loop
for (let i = 0; i <= 2; i++) {
  var forVar = "shoaib";
}

console.log(forVar);
