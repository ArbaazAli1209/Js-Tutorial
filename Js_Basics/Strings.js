const name = "Arbaaz"
const repoCount = 30

// console.log(name + repoCount + " Value")  // old

// String interpolation.
// console.log('Hello! My name is', name, 'and my repo count is', repoCount);

const gameName = new String('Mario-Bros')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('o'));

// const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   Arbaaz   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://coding.com/arbaaz%20code"
console.log(url.replace('%20', '-'))
console.log(url.includes('arbaaz'));
console.log(gameName.split('-')) 