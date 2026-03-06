// # Primitive Datatype
// 7 Types : String, Number, boolean, Null, Undefined, Symbol, BigInt 

const score = 100
const scroreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
// let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)  

const bigNumber = 34567845678567n

// # Reference Type (Non Premitive Datatype)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Priyanka",
    age: 25,
}

const myFunction =  function (){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  --> copy
// Heap (Non Primitive) --> reference

let myName = "Priyanka"
let anotherName = myName
anotherName = "Sheetal"
console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "priyanka@google.com"
console.log(userOne);
console.log(userTwo);
