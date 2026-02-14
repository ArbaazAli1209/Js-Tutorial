// If
const isUserLoggedIn = true
const temperature = 41

// if (2 == "2") {
//     console.log(Executed);
// }

// if (temperature === 40) {
//     console.log("Less than 50");
// }
// else {
//     console.log("Temperature is greater than 50");
// }
// <, >, <=, >=, ==, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("Test"), console.log("Test2");   // Not good Practice

// if(balance < 500) {
//     console.log("Less than 500");
// }
// if(balance < 750) {
//     console.log("Less than 750");
// }
// if(balance < 900) {
//     console.log("Less than 900");
// }
// else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}