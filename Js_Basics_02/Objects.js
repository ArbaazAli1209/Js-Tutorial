// Singleton
// object.create

// Object Literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "Mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    logInDays: ["Mon", "Wed", "Sat"]
}

// console.log(jsuser.logInDays);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "hitesh@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello Js user");
}

jsuser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());