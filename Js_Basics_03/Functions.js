function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
//     return number1 + number2 
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
    if (username === undefined) {
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hitesh"));

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`The username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 399
// })

const myNewArray = [200, 400, 500, 800]

function returnSecondValue (getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 800]));