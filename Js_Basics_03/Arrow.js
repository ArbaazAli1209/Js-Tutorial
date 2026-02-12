const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
    
// }

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);   
// }

//      Arrow Function.
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => ({username: "hitesh"})

console.log(addtwo(3, 7));