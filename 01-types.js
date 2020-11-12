var foo = true; // boolean
var bar = false; // boolean
console.log(typeof foo);
var positive = 10; // number
var negative = -10; // number
var huge = Infinity; // number
var nothing = NaN; // number
var decimal = .01; // number
console.log(typeof decimal);
var single = 'Hello World'; // string
var double = "It's a good day"; // string
var backtick = `Hello Class`; // string
var templateExample = `${backtick} and ${double}`; // string
var concatString = backtick + ' and ' + double; // string
console.log(typeof concatString);
var nothingness = null; // expected to be empty
var nothingThere = undefined; // unexpected emptiness 
console.log(nothingness == nothingThere);
console.log(nothingness === nothingThere);
console.log(typeof nothingness);
console.log(typeof nothingThere);