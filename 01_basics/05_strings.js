const name = "Priyanka"
const repoCount = 50
console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Priyanka-28')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.lastIndexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherStirng = gameName.slice(-6,4)
console.log(anotherStirng);

const newString1 = "    priyanka    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://priyanka.com/priyanka%2028"
console.log(url.replace('%20', '-'));

console.log(url.includes('priyanka'));

console.log(gameName.split('-'));
