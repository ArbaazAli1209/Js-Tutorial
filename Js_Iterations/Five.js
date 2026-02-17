const code = ["js", "ruby", "java", "python", "cpp"]

// Callback function
// code.forEach( function (val) {
//     console.log(val);
// } )

// code.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }
// code.forEach(printMe)

// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})