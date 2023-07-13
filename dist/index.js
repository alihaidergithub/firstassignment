"use strict";
// 1. Install Node.js, TypeScript and VS Code on your computer.
console.log('Hello World!');
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person = 'Eric';
console.log(`Hello ${person}, would you like to learn some Python today?`);
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = 'Ali Haider';
console.log(`Titlecase: ${person_name.toLowerCase()}, Uppercase: ${person_name.toUpperCase()}, Lowercase: ${person_name.toLocaleLowerCase()}`);
let company = 'Verge Future';
let pid = 25626;
let isPublished = true;
let x = 'Hello 123';
let ids = [2, 5];
let arr = [1, 'Hello', 25, true];
//Tuple
let tup = [25626, 'Ali Haider', true];
//Tuple Array
let employee;
employee = [
    [1, 'Mansoob'],
    [2, 'Ali'],
    [3, 'Nouman'],
];
//Union
let sid;
sid = 25626;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
const user = {
    id: 25,
    name: 'John',
};
//Type Assertion
let cid = 'Hello';
let customerId = cid;
customerId = 25626;
//Add Function
function addNum(x, y) {
    //:number used for return type
    return x + y;
}
console.log(addNum(1, 10));
//Void or Union Type in function
function log(message) {
    return message;
}
console.log(log(1));
console.log('Hello! Ali I am testing message');
