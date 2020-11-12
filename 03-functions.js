function functionSyntax () {} // 'this' passed in from call stack
const arrowSyntax = () => {} // Lexical 'this' assumed

const sum = (x = 0, y = 0) => {
    return x + y;
}
console.log(typeof sum);
console.log(sum());
console.log(sum(1, 2));
let x = 1,
    y = 2;
console.log(sum(x, y));

const holdingPattern = (callback) => {
    console.log('Entering Holding Pattern');
    setTimeout(() => {
        for(let i = 0; i < 4; i++){
            callback(i);
        }
    }, 3000);
}
const myCallback = (index) => console.log(index);
// holdingPattern(myCallback); // NonAnonymous Callback
holdingPattern((index) => console.log(index)); // Anonymous Callback