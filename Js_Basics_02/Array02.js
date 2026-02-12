const marvel_heros = ["Ironman", "Spiderman", "thor"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)    // Concat Operator
// console.log(allHeros);

// Spread Operator
// const all_new_heros = [...marvel_heros, ...dc_heros]  // Preferred method
// console.log(all_new_heros);

// const nested_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_array = nested_array.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("Hello"))
console.log(Array.from("Hello"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));