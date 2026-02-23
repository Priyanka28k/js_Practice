const accountId = 144334;
let accountEmail = "priyanka@gmail.com";
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2;  // not allowed

accountEmail = "pk@gmail.com"
accountPassword = "56232"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])