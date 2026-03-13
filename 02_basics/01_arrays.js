const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[5]);
// console.log(myArr2);

// Array methods

myArr.push(6)
myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)  
// console.log(myArr);   // included to the starting

myArr.shift()
// console.log(myArr);   // removinf from the starting

// console.log(myArr.includes(9));
// console.log(myArr);
// console.log(myArr.indexOf(9));   // not exist -1

const newArr = myArr.join()    // it will join and convert into join
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, spice

console.log("A ",myArr);

const myNewArray = myArr.slice(1,3)
console.log(myNewArray);

console.log("B ",myArr);

const myNewArray2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myNewArray2);
