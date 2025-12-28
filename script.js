function a(b) {
  // here a is Higher Order Function.
  console.dir(b);
  b();
}

const sayHi = function () {
  console.log(5 + 6);
  console.log("Hiiiiiiiiii");
  console.log("This is Anonymous Function.");
};

// here sayHi is callBack function because it is passed as an callBack function.
a(sayHi);

let value1 = setTimeout('console.log("Hello - 1")', 1000);
clearTimeout(value1);
console.log(value1);
let value2 = setTimeout('console.log("Hello - 2")', 2000);
let value3 = setTimeout('console.log("Hello - 3")', 3000);
