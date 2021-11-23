//////REVERSE A STRING WHOLE
let string = 'Ruchi Priya';
//expected op = ayirP ihcuR
let op = string.split('').reverse().join('');
console.log('reverse string:', op);

//FIND SUM USING REDUCE
let aR = [1, 2, 3, 4, 5];
let sum = aR.reduce((a, i) => {
  return aR + i;
});
console.log('sum using reduce', sum);

////TYPE OF QUES WITH UNDEFINED
const n = undefined + 11;
if (n === NaN) {
  console.log('NaN');
} else if (n === 11) {
  console.log('11');
} else {
  console.log('other');
}
console.log('typeofQues', typeof n);

////STARTS WITH AND ENDS WITH
let name = 'Full Stack Tutorials and Answers!';
//startsWith
console.log(name.startsWith('Full')); // true
console.log(name.startsWith('full')); // false
console.log(name.startsWith('Tutorials')); // false
console.log(name.startsWith('Tutorials', 11)); // true
//endsWith
console.log(name.endsWith('Answers!')); // true
console.log(name.endsWith('answers!')); // false

/////
var a = 3;
var b = a++; //  b = 3, a = 4
var c = ++a; // a = 5 , c = 5
console.log(a, b, c);

/////
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NULL);
console.log(typeof typeof 1);

/////How to convert an Object {} into an Array [] in JavaScript?
let obj = { id: '1', name: 'Test User', age: '25', profession: 'Developer' };
console.log(Object.keys(obj));
// ["id", "name", "age", "profession"]
// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "Test User", "25", "Developer"]
// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));

//array to Object
let arrr = ['1', 'Test User', '25', 'Developer'];
let arrr1 = [
  ['id', '1'],
  ['name', 'Test User'],
  ['age', '25'],
  ['profession', 'Developer'],
];
console.log(Object.fromEntries(arrr1));
//Method 1: Using Object.assign() method
console.log(Object.assign({}, arrr));
// Method 2 Using Spread operator
console.log({ ...arrr });

////////////////
var apr = 20;
//let apr = 10;
console.log(apr); //// THROWS A ERROR

///////////
function foo() {
  let aPPP = (bP = 0);
  aPPP++;
  return aPPP;
}
console.log(foo());
console.log(typeof aPPP); // => UNDEFINED
console.log(typeof bP); // => ??? NUMBER

/////////////
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]); /////UNDEFINED

////////////////////
const length = 4;
const numbers1 = [];
for (var i = 0; i < length; i++) {
  numbers1.push(i);
  console.log('i', i);
}
console.log(numbers1);

const length1 = 4;
const numbers11 = [];
for (var i = 0; i < length1; i++); ////BECAUSE OF SEMICOLON
{
  numbers11.push(i);
}
console.log(numbers11);

///////////////////////
function arrayFromValue(item) {
  return;
  [item]; ////because when we define it in next line, semi colon is inserted automatically
}
console.log(arrayFromValue(10));

////////////////////
console.log(0.1 + 0.2 === 0.3); // FALSE
