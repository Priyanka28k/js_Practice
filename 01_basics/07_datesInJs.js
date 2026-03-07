let myDate = new Date()
console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 25)
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2026, 0, 25, 5, 3)
console.log(myCreatedDate1.toLocaleString());
