var num = 20;
var str = "The lord is my shephard";
var bool = true;
var obj = { Name: "Shiphura"};
var arr = (1,2,3)
console.log(typeof num);     // number
console.log(typeof str);     // string
console.log(typeof bool);    // boolean
console.log(typeof obj);     // object
console.log(typeof arr);    //arrey
let student = {
    name:"favor",
    age:"20",
    adult: false, 
}
//Number represents both integer and floating-point numbers
let age = 30; //number
let price = 19.99;
console.log(30,19.99);
//string represents asquensce of characters
let name = "Favor"; //string
console.log("Favor");
//bolean represents tru or false
let isActive = true;
console.log(true);
//undefined: avariable that has been declared but not assigned avalue.
let x;
console.log(x) //output
//datatypes;define the type of data(eg number , string,boolean)
//purpose: specify the kind of value  a variable can hold
//eg number, string.

//A data structure is a way of organising, managing and storing data in the computer so that it can be accessed and modifie effeciently
//Object can contain properties and methods

//Properties; these are variables that are part of the object. They store data related to the objects
//Methods; these are functions that are part of the object. They perfom actions releted to the objets
// EXAMPLES 1
let person = {
    firstName: "Shiphura",
    lastName: "Arinda",
    age: 20,
    fullName: function(){"firstName,lastName"}
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName());
// The person is an objet with properties(firstName, lastName, age)
//and a method (fullName).
//properties are accessed using dot notation(person.firstName,person,age)
// The method fullName is accessed similary(person.fullName())
//2 Document object
let document = {
    title: document.title,
    URL: document.URL,
    body: document.body,
    getElementById: function(id)
}




