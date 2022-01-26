//Assignment 7
//Array basic

//1. Array map()

//Return a new aray with the square root of all element values.
 
const number = [4,9,16,25];
const newArr = number.map(Math.sqrt);
console.log(newArr);

//Output: [2,3,4,5]

//2. Array filter()

//return an array of all values in ages[] that are 18 or above

const ages = [32,33,14,40];
const result= ages.filter(checkAdult);

function checkAdult(age){
    return age  >= 18;
}
//Output: 32,33,40

//3. Array sort()

const fruits = ["Banana","Orange","Mango","Apple"];
fruits.sort();

//4. Array include()
// Check if a string includes "world".
let text = "Hello world .";
text.includes("world");

//Output : true


//4. Array destructring

let a,b,restOf;
[a,b]= [10,20];

console.log(a);
//Output: 10

console.log(b);
//Output: 20

[a,b,...restOf]= [10,20,30,40,50];

console.log(restOf);
//Output: Array[30,40,50]