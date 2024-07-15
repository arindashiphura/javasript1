//print 0 to 5using console.log
//while loop
let a = 0;
while (a < 5) {
    console.log(a);
    a++
}
//for loop
for
    (let m = 0; m <= 5; m++
) {
    console.log(m)
}

for (let w = 5; w >= 0; w--) {
    console.log(w)
};

let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    let add =numbers[i]+20
    console.log(add)
};

//initialisation, condition, increament/ dencreament
let sum = 0
for(i=0; i< numbers.length;i++){
sum=sum+numbers[i]
}
console.log(sum);
//EXAMPLES
// initialization
// It typically involves declarering and setting a variable that will be used as loop counter
//let i = 0 is the initialisation
//condition is evaluated before each iteration of the loop. if the condition of true , the loop continues to excute; if false the loop stops
//eg
for(let i = 0; // initialisation
    i <=5 ;   //condition . as long as its than 5, the loop continues to run
    i++      //increament . it increases the value of i by 1 after interation
){
    console.log(i)
}

for(let i = 5; // initialisation
    i >=0 ;   //condition . as long as its than 5, the loop continues to run
    i--      //decreament . it increases the value of i by 1 after interation
){
    console.log(i)
}

for(let i=0;
    i<=5;
    i++
){
    console.log("hello world!")
}
const names =("Alice","Bob","arinda","eve");
for(i=0;
    i<=names.length; i++
){
console.log('hello, $names[i]!')
};

let b = 0;
while (b <= 5) {
    console.log(b);
    b++
}