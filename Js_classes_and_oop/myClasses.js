// ES6 (Later Javascript)

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());

// Behind the scene.

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

const tea = new User("tea", "tea@gmail.com", "456")

console.log(tea.changeUsername());
console.log(tea.encryptPassword());