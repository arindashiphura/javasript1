//. if 
//if else 
//if else 
//switch
//ternally operator
//if(conditon){// function
//}
/*let number = 5
if(number>0){
    console.log(" ${number} is a positive")
}
let isShinning = true
if(isShinning){
    console.log("remenber to take your sun glasses")
}*/
//if (condition){
// //runs whn the condition is true
//}else{
//runs when the condition is false
//}
/*let number = -3
if(number>0){
    console.log(" ${number} is a positive")
}else
{
    console.log("${number} is a negative")
}
    */
//multiple conditions u can use else as you can
//let isShinning = true
//if(isShinning){
//  console.log("remenber to take your sun glasses")
//}
//lse
//{
//console.log("no need for sun glasses")
//}
// here
/*let number = 0
if(number>0){
    console.log(" ${number} is a positive")
}
else if( number<0)
{
    console.log("${number} is a zero")
}
else if(number===8){
    console.log("${number} is a negative")
} 
else
{
    console.log("${number} is a number")
}


let weather = "sunny"
if(weather==='rainny'){
    console.log("i need a rain court")
}
else if (weather===cloudy)
{
console.log("i need a jacket")
}
else (weather===sunny)
    {
    console.log("i only need a shirt")
    }*/
//conditional operator
//==equal to something
//!= not equal to
//>something
//<something
//>=
//===
// !== not equal to
// && and operator needs both of the condition to be true
// || or operator ,needs one of the condition to be true
console.log(4 == "4")
console.log(4 === "4")
console.log(4 !== "4")

let grade = 75

if (grade > 85) {
    console.log("A")
}
else if (grade < 85 && grade >= 75) {
    console.log("B")
}
else if (grade >= 65 && grade < 75) {
    console.log("C")
}
else if (grade >= 55 && grade < 65) {
    console.log("D")
}
else {
    console.log("F")
}
//swictch alternative of if else
let newwheather = "clounday"
switch (newwheather) {
    case 'rainn':
        console.log("i need a rain court")
        break
    case 'cloundy':
        console.log("i need a jacket")
        break
    case 'sunny':
        console.log("i only need a shirt")
        break
    default:
        console.log('i dont need any')
        break

}

let dayOfTheWeekByUser = prompt("what is the date today")
let day = dayOfTheWeekByUser.Uppercase()
switch (day) {
    case 'monday':
        console.log("today is monday")
        break
    case 'tuesday':
        console.log("today is tuesday")
        break
    case 'wednesday':
        console.log("today is wednesday")
        break
    case 'thursday':
        console.log("today is thursday")
        break
    case 'friday':
        console.log("today is friday")
        break
    case 'saturday':
        console.log("today is  saturday")
        break
    case 'sunday':
        console.log("today is sunday")
        break
    default:
        console.log('not a day of the week')
        break
}
//ternally operator
let israininng = true
isRaininng
?console.log("rememberbto take umbrella")
:console.log("no need for umbrella")
let newNumber = 5
switch(newNumber){
    case (number>0):
        console.log('${newNumber} is a positive number')
}
// cases are boolean