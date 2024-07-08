/*[]// arays
{}//objets
()//functions*/

//An arrays is aspecial variable that can hold multiple values at once
//Arrays are used to store lists of elements, such as objects,strings, numbers,or even other arrays

let shoppingList = ["mangoes","oranges","apples","banana"];
const oddNumbers = [2,4,6,8,];
let countries = ["uganda","kenya","rwanda"];
let profile = 
["arinda",20,true,{country:"uganda",city:"kampala"},
{skills:["footballer","netballer"]}
];
console.log('Here is a shoppingList:', shoppingList);
console.log("look at the odd    Numbers:", oddNumbers);
console.log("some countries:", countries);
console.log("here is a profile:", profile);

//Arrays are elements are accessed usingtheir index, with the first elementhaving an index of '0'
let firstItem = shoppingList[0]
console.log(firstItem)

let thirdItem = shoppingList[1]
console.log(thirdItem)

let lastItem = shoppingList[3]
console.log(lastItem)
//you can change the value of an element by assigning a new value to aspesfic index
shoppingList[1] = "jackfruits";
console.log(shoppingList);