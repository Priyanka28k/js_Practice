// let score = "33"
// let score = "33ab"
// let score = null
// let score = undefined
// let score = true
let score = "Priyanka"

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //  investigation state NAN


// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "Priyanka"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true, 0 => false
// "" => false
// "Priyanka" => true

let someNumber = 33
let stringNumber = String (someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);


// *********************** Operations ************************* //

console.log("*********OPERATIONS********");

let value = 3;
let negValue = - value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hi"
let str2 = " Priyanka"
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log(+true);

let gameCounter = 100
gameCounter++
console.log(gameCounter);
