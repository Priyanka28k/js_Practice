const score = 400
console.log(score);
console.log(typeof (score));


const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2))  // ecommerce site shopping cart value

const otherNumber = 24.345678965
console.log(otherNumber.toPrecision(3));   // 24.3

const otherNumber1 = 124.895678965
console.log(otherNumber1.toPrecision(3));   // 125

const otherNumber2 = 3221.045678965
console.log(otherNumber2.toPrecision(3));   // 3.22e+3

const hundred = 1000000
console.log(hundred.toLocaleString()); // 1,000,000
console.log(hundred.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++++ Maths ++++++++++++++++++++++++
console.log(Math);
// console.log(Math.abs(-4));   // 4
// console.log(Math.round(4.6));   // 5
// console.log(Math.ceil(4.2));   // 5
// console.log(Math.floor(4.6));   // 4
// console.log(Math.min(4,2,5,1,6)); // 1
// console.log(Math.max(4,2,5,1,6));  // 6

console.log(Math.random());   // 0-1 (including points)
console.log(Math.random() * 10);  // 3.5820527487990383
// calue can be 0.04
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
