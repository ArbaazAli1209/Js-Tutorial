const myArr = [5, 7, 9, 11, 13, 15]
// console.log(myArr(2));

// const myHeros = ["Iron Man", "Spiderman"]
// console.log(myHeros);

// const myArr2 = new Array(1, 3, 5, 7)
// console.log(myArr2);

// Array Methods.

// myArr.push(17)
// myArr.push(19)
// myArr.pop()

// myArr.unshift(3)
// myArr.shift()

// console.log(myArr.includes(11));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);