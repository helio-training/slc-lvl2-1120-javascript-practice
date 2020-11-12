'use strict';
// for loop
// for (let i = 0; i < 100; i++){
//     if(i % 2 == 0){
//         console.log(i, 'even for loop');
//     } else if(i % 2 == 1) {
//         console.log(i, 'odd for loop');
//     }
// }

// while loop
let x = 0;
// while(x < 100){
//     if (x % 2 == 0) {
//         console.log(x, 'even while loop');
//     } else if (x % 2 == 1) {
//         console.log(x, 'odd while loop');
//     }
//     x++;
// }

/* FizzBuzz
Write a short program that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/
for(let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else if(i % 3 == 0){
        console.log('Fizz');
    } else {
        console.log(i);
    }
}