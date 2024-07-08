function greet(name){
    console.log( "hi," + name + ".")
}
greet("arinda");
//programming day 5

// 1. object orianted programming ( classes, blueprints)
// 2. functional programming - blocks of code
// 3. object based programming (objects)
// functions are blocks of codes designed to perform a spescific tasks or calculation
// it has input and output
// it is defined using the function keyword followed by name (), alist of parameters enclosed in () and function body enclosed in{}


//declarering a function without a perameter
function areaofCircle(radius){
 
//let radius=100
let area = Math.PI*radius*radius
return area;
}
console.log(areaofCircle(200))

areaofCircle()
areaofCircle()
areaofCircle()
areaofCircle()
function sum(num1,num2){
    let add= 1+2
    return add;
}
console.log(sum(3,6))

//arrow function
const sum2 = (x,y)=> x+y;

console.log(sum2(4,8))
//function to multiply the number
function multiply(p,q){
    let answer =q*q
    return answer;
}
//function to gravity
console.log(multiply(100,5));
function product(m,g=9.81){
    let weight=m*g
    return weight + 'N';
}
console.log(product(6))