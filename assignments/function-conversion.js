// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => {
    return;
}
console.log("Function was invoked!")
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = param1 => {
    return param1;
}
console.log(anotherFunction("Example"))
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (prm1,prm2) => {
return prm1 + prm2;
}
console.log(add(1,2))
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (rem1,rem2) => {
    return rem1 - rem2;
}
console.log(subtract(89,22))
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);