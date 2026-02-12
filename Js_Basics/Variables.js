const accountId = 14435  // Can't be changed.
let accountEmail = "arbaaz@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // A variable can also be declared without datatype.
let accountState; // If variable is not declared, it is considered undefined.

// accountId = 2  // Not Allowed

accountEmail = "ar@ar.com"
accountPassword = "212121"
accountCity = "Banglore"

console.log(accountId)

console.log(typeof(accountCity))  // Returns the type of data.

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


// Makes table.
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])