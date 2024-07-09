//variables
// Variables to store produce details
let producesName = "beans"; // Name of the produce
let produceType = "legume"; // Type of the produce
let procurementDate = "2024-07-08"; // Date of procurement
let procurementTime = "14:30"; // Time of procurement
let tonnages = 1500; // Tonnage in kg
let cost = 5000000; // Cost in Ugx
let dealerName = "John Doe"; // Name of the dealer
let branchName = "Maganjo"; // Branch name
let contact = "0700123456"; // Contact number
let sellingPrice = 5500000; // Selling price

// Examples of different data types
let producersName = "beans"; // String
let tonnage = 1500; // Number
let isAvailable = true; // Boolean
let produceList = ["beans", "grain maize", "cowpeas"]; // Array
let produceDetails = {
    name: "beans",
    type: "legume",
    tonnage: 1500,
    cost: 5000000,
    dealer: "John Doe"
}; // Object

// Object representing a produce item
let produceItem = {
    name: "beans",
    type: "legume",
    date: "2024-07-08",
    time: "14:30",
    tonnage: 1500,
    cost: 5000000,
    dealer: "John Doe",
    branch: "Maganjo",
    contact: "0700123456",
    sellingPrice: 5500000
};

// Accessing object properties
console.log(produceItem.name); // Output: beans
console.log(produceItem.tonnage); // Output: 1500

// Examples of different data types
let produceName = "beans"; // String
let tonnageSold = 1500; // Number
let isAvailables = true; // Boolean
let producesList = ["beans", "grain maize", "cowpeas"]; // Array
let producesDetails = {
    name: "beans",
    type: "legume",
    tonnage: 1500,
    cost: 5000000,
    dealer: "John Doe"
}; // Object
c

// Array of produce names
let produceNames = ["beans", "grain maize", "cowpeas", "g-nuts", "rice", "soybeans"];

// Accessing array elements
console.log(produceNames[0]); // Output: beans
console.log(produceNames[3]); // Output: g-nuts

// Array of objects
let produceItems = [
    {name: "beans", tonnage: 1500, cost: 5000000},
    {name: "grain maize", tonnage: 2000, cost: 6000000},
    {name: "cowpeas", tonnage: 1000, cost: 3000000}
];

// Accessing elements of an array of objects
console.log(produceItems[1].name); // Output: grain maize
console.log(produceItems[2].cost); // Output: 3000000

// Function to calculate the total cost of procured produce
function calculateTotalCost(tonnage, costPerTon) {
    return tonnage * costPerTon;
}

// Using the function
let totalCost = calculateTotalCost(1500, 5000); // 1500 kg at 5000 Ugx per kg
console.log(totalCost); // Output: 7500000

// Function to display produce details
function displayProduceDetails(produce) {
    console.log(`Produce Name: ${produce.name}`);
    console.log(`Type: ${produce.type}`);
    console.log(`Tonnage: ${produce.tonnage} kg`);
    console.log(`Cost: ${produce.cost} Ugx`);
}

// Using the function
displayProduceDetails(produceItem);
