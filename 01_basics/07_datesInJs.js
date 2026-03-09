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
let myCreatedDate2 = new Date("2026-01-28")   // 00 is invalid
console.log(myCreatedDate2.toLocaleString());

let myCreatedDateInIndia = new Date("01-14-2026")   // 00 is invalid
console.log(myCreatedDateInIndia.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDateInIndia.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    
})

console.log(
    newDate.toLocaleString('default',{
        weekday: "long",
        day: "2-digit"
    })
);
