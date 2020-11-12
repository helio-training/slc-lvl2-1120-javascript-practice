var avoid = 'Try not to use'; // Ask is it needed outside the scope
let changeable = 'Use more often'; // Ask does it need to change
const immutable = 'Cannot change'; // Use first

console.log(avoid);
console.log(changeable);
console.log(immutable);

const myArray = [];
console.log(myArray);
myArray.push('Hello');
console.log(myArray);
// myArray = 'Hello'; // Can't reassign

{
    var seeable = 'You can use me anywhere';
    const hiddenConstant = 'You cannot use me';
    let hiddenChanger = 'You cannot use me either';
}
// let seeable = 'You can see me';
const hiddenConstant = 'Outside now'
console.log(seeable);
console.log(hiddenConstant);
// console.log(hiddenChanger);