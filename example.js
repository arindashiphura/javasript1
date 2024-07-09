//if 
let age = 18;
if (age >= 18) {
    console.log("you are an adult")
}

//if eslse
let ages = 16;
if (ages >= 18) {
    console.log("you are an adult");
}
else {
    console.log("you are a minor");
}
//else if allows to specify anew condition if the first condition is false
let agee = 20;
if (agee < 13) {
    console.log("you are a child");
}
else if (agee < 18) {
    console.log("you are a teenager");
}
else {
    console.log("you are an adult")
}
//ternary operator
//condition ? expression if true: expression if false
let agees = 18;
let message = (agees >= 18) ? 'you are an adult' : "you are a minor";
console.log(message)

let GPA = 72
switch (true) {
    case (GPA > 85):
        console.log('A')
        break
    case (GPA > 75 && GPA <= 85):
        console.log('B')
        break
    case( GPA > 65 && GPA <= 75):
        console.log("C")
        break
    case (GPA > 55 && GPA <= 65):
        console.log('D')
        break
     default:
        console.log("F")
}
let student = "ARINDA"
console.log(student.toLowerCase())

