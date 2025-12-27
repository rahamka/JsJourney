// All Scopes in JavaScript.

// Lexical Scope in JavaScript.

function parentFun() {
  let username = "Ahmad";
  function add() {
    console.log(5 + 3);
  }
  function childFun() {
    console.log(username); // closure
    add();
  }
  childFun();
}

parentFun();

// Global Scope in JavaScript.

let num1 = 55;
const num2 = 56; // => const, let are string in the script scope
var num3 = 57; // => var is storing in the Global scope.

console.log(num1, num2, num3);

function printFun() {
  console.log(num1);
}

printFun();

// Local Scope in JavaScript.
function localFun() {
  var ifVariable = false; // => false = 0
  console.log(ifVariable + 1); // 1
}

localFun();

// Objects in JavaScript.

console.log("Objects in JavaScript.");

let studentData = {
  studentName: "Shoaib",
  studentRoll: 112,
  Class: "XII",
  DOB: "12-05-2010",
};

console.log(studentData["DOB"]);

Object.seal(studentData);

studentData.Class = "XI";

console.log(studentData.Class);
