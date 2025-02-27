const accountId = 12345
let accountEmail = "Asdfrfer@gmail.com"
var accountPassword = "98594"
accountCity = "Rajkot"
let accountState;

accountEmail = "zxcv@gmail.com"
accountPassword = "23242"
accountCity = "Mumbai"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);