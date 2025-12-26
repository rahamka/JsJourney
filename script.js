// My understanding for Hoisting in Javascript?
// in Javascript when we're using variables or functions before declaration them that is called Hoisting.
// Ex.
console.log(a); // undefined
var a = 5;

// why a prints undefined?
// because when we are run the code then two phases Javascript runs
// Memory Creation phase.
// Code Execution phase.

/*
1. when Memory Execution phase runs then it gives value to all the variables undefined if they've not defined value
2. it immediately runs the var and gives undefined
3. but if there is 
   console.log(aa); 
   let aa = 5;
   then this code gives ReferenceError because Javascript didn't initialized undefined to let and const created variables.
4. if there is an 
   add(); 
   function add(){
   console.log(2+4)
   }; 
   then this function will run because in Javascript in Memory phase all the function are stored.
 */
