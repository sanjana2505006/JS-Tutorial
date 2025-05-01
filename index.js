/* 1. Ways to print in JS 
console.log("Hello World");
alert("me");
document.write("this is document write");
*/

// 2. JS console API
console.log("Hello World");
console.warn("this is a warning");
console.error("This is an error");

/* 3. JS Variables
 What are Variables?
 Containers to store data values 
 */

/* 
 multiline 
comment
*/

var number = 34;
var number = 56;
console.log(number1 + number2);

// Data types in JS
//number
var num1 = 455;
var num2 = 554;

//object
var str1 = "This is a string";
var str2 = "This is also a string";

//object (key value pair)
var marks = {
  ravi: 34,
  shubham: 64,
  insha: 72,
};

// Booleans
var a = true;
var b = false;
console.log(a, b);

var und = undefined;
console.log(undefined);

// null and undefined are different

/* 
In JS there are two different kind of data types 
1. Primitive 
2. Non - Primitive (also known as Reference data type)
*/

/* 
1. Primitive = undefined, null, number, string, boolean, symbol 
2. Non - Primitive = Arrays, Objects
*/

var arr = [1, 2, 3, 4, 5];

// String Method in JS
let myString = "Happy bday Happy";
console.log(myString.length);
console.log(myString.indexOf("bday"));
console.log(myString.lastIndexOf("Happy"));
console.log(myString.slice(0, 3)); // method for slicing
d = myString.replace("Happy", "Happiest");
console.log(d, myString);

// Dates in JS
let myDate = new Date();
console.log(myDate.getTime()); // return time in seconds
console.log(myDate.getFullYear()); // return year as 2025
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

let myDatee = new Date(); // here 'new' keyword is use to create new date

/* DOM Manipulation (Document Object Model)
DOM se HTML ko manipulate kr sktre hai dynamically
*/
document.getElementById("click").style.border = "blue";

let elem = document.getElementById("click");
console.log(elem);

let elem2 = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
// by pressing "gebcn" = getElementByClassName
