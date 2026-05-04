// let myName = "Hitesh     "
// let myChannel = "Chai     "
// console.log(myName.length);

let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Web Slinging",

    getSpiderPower: function() {
        console.log(`Spidey power is $[this.spiderman]`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.HeyHitesh = function() {
    console.log(`Hitesh says Hello!`);
}

// heroPower.hitesh()
// myHeroes.hitesh()
// myHeroes.HeyHitesh()
// heroPower.HeyHitesh()

// Inheritance

const User = {
    name: "Chai",
    email: "chai@example.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: `JS Assignment`,
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "ChaiAurCode     "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True lenght is ${this.trim().length}`);
}

anotherUserName.trueLength()
"Hitesh".trueLength()
"Ice tea".trueLength()