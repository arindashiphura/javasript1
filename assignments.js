//comments can make make code readable
// Welcome to the  CSE JavaScript class 
/*
Comments can make code readable,
easy to reuse, and informative
*/

// datatypes.js

// Variables of different data types
var num = 42;                // Number
var str = "Hello, World!";   // String
var bool = true;             // Boolean
var obj = {name: "Alice"};   // Object
var arr = [1, 2, 3];         // Array (object)
var func = function() {};    // Function
var undef;                   // Undefined
var nul = null;              // Null (object)
var sym = Symbol("sym");     // Symbol
var bigInt = BigInt(123456); // BigInt  

// Checking data types using typeof operator
console.log(typeof num);     // number
console.log(typeof str);     // string
console.log(typeof bool);    // boolean
console.log(typeof obj);     // object
console.log(typeof arr);     // object
console.log(typeof func);    // function
console.log(typeof undef);   // undefined
console.log(typeof nul);     // object
console.log(typeof sym);     // symbol
console.log(typeof bigInt);  // bigint


// Declaring four variables without assigning values
var age;
var name;
var isStudent;
var course;

// Assigning values to the variables
age = 20;                    // Number
name = "Shiphura";           // String
isStudent = true;            // Boolean
course = "software engineering"; // String

// Printing the variables and their types
console.log("age: " + age + " (type: " + typeof age + ")");
console.log("name: " + name + " (type: " + typeof name + ")");
console.log("isStudent: " + isStudent + " (type: " + typeof isStudent + ")");
console.log("course: " + course + " (type: " + typeof course + ")");


// Declaring variables to store personal information
var firstName;
var lastName;
var maritalStatus;
var country;
var age;

// Assigning values to the variables
firstName = "Shiphura";
lastName = "Arinda";
maritalStatus = "Single";
country = "Uganda";
age = 30;

// Printing the variables
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Marital Status: " + maritalStatus);
console.log("Country: " + country);
console.log("Age: " + age);

// Declaring and assigning variables in a single line
var firstName = "Shiphura", lastName = "Arinda", maritalStatus = "Single", country = "Uganda", age = 20;

// Printing the variables
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Marital Status: " + maritalStatus);
console.log("Country: " + country);
console.log("Age: " + age);

// Declare and assign initial values to variables
var myAge = 25;
var yourAge = 30;

// Log the values to the browser console
console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");


