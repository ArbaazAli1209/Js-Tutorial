// IIFE -> Immediately Invoked Function Expressions

(function chai() {
    // Named IIFE
    console.log(`DB Connected`);
})();
// ()();

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('Hitesh');