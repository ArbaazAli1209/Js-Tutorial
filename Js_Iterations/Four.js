const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by Apple'
}

for (const key in myObject) {
    // console.log(key);       // For Keys
    // console.log(myObject[key]);     // For its Values
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}