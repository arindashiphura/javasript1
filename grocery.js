// Corrected variables and data types
let producesName = "Beans"; // Name of the produce
let typeOfProduce = "Legume"; // Type of the produce
let procurementDate = "2024-07-08"; // Date of procurement
let procurementTime = "14:30"; // Time of procurement
let tonnages = 1500; // Tonnage in kg
let cost = 5000000; // Cost in Ugx
let dealersName = "Arinda"; // Name of the dealer
let branchsName = "Maganjo"; // Branch name
let contact = "0700123456"; // Contact number
let sellingPrice = 5500000; // Selling price

// Examples of different data types
let isAvailable = true; // Boolean
let produceList = ["beans", "grain maize", "cowpeas"]; // Array
let produceDetails = {
    name: "beans",
    type: "legume",
    tonnage: 1500,
    cost: 5000000,
    dealer: "Arinda"
}; // Object

// Object representing a produce item
let produceItem = {
    name: "Beans",
    type: "Legume",
    date: "2024-07-08",
    time: "14:30",
    tonnage: 1500,
    cost: 5000000,
    dealer: "Arinda",
    branch: "Maganjo",
    contact: "0700123456",
    sellingPrice: 5500000
};

// Accessing object properties
console.log(produceItem.name); // Output: Beans
console.log(produceItem.tonnage); // Output: 1500

// Array of produce names
let producesNames = ["beans", "grain maize", "cowpeas", "g-nuts", "rice", "soybeans"];

// Accessing array elements
console.log(producesNames[0]); // Output: beans
console.log(producesNames[3]); // Output: g-nuts

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


// Variables
let managerName = "Shiphura";
let branchName = "Maganjo"; // Corrected variable name

// Data Types
let produceName = "Beans"; // String
let tonnage = 1500; // Number
let costInUGX = 250000; // Number
let dealerName = "Jane Smith"; // String
let contactNumber = "+256234567890"; // String (phone number)
let salePrice = 300000; // Number
let buyerName = "Michael Johnson"; // String
let salesAgentName = "Alice Brown"; // String
let creditAmountDue = 180000; // Number

// Example of date and time handling (using JavaScript's Date object)
let currentDate = new Date(); // Current date and time

// Example of an object for recording produce procurement
let procurementRecord = {
    produceName: "Beans",
    typeOfProduce: "Legume", // Corrected property name
    date: "2024-07-08",
    timeOfProduce: "10:30 AM", // Corrected time format
    tonnageKG: 1500, // Corrected property name
    costInUGX: 250000,
    dealerName: "Jane Smith",
    branchName: "Maganjo",
    contact: "+256098765432",
    priceToBeSoldAt: 300000
};

// Example of an object for recording sales
let salesRecord = {
    produceName: "Beans",
    tonnageKG: 1000,
    amountPaidUGX: 200000,
    buyerName: "Michael Johnson",
    salesAgentName: "Alice Brown",
    date: "2024-07-08",
    time: "11:45 AM"
};

// Example of an object for recording credit sales
let creditSaleRecord = {
    buyerName: "David Smith",
    nationalID: "CM123456787KLL",
    location: "Kampala",
    contact: "+256707593456",
    amountDueUGX: 180000,
    salesAgentName: "Alice Brown",
    dueDate: "2024-08-08",
    produceName: "Maize",
    typeOfProduce: "Cereal",
    tonnage: 1200,
    dateOfDispatch: "2024-07-10"
};

// Example of an array of produce names managed by the manager
let produceNames = ["Beans", "Maize", "Cowpeas", "Groundnuts", "Rice", "Soybeans"];

// Example of an array for sales records
let salesRecords = [
    { produceName: "Beans", tonnageKG: 1000, amountPaidUGX: 200000, buyerName: "Michael Johnson", salesAgentName: "Alice Brown", date: "2024-07-08", time: "11:45 AM" },
    { produceName: "Maize", tonnageKG: 800, amountPaidUGX: 160000, buyerName: "Sarah Wilson", salesAgentName: "Bob Green", date: "2024-07-09", time: "10:15 AM" }
];

// Operation: Reduce tonnage of sold produce
function reduceTonnage(tonnageSold, currentStock) {
    return currentStock - tonnageSold;
}

// Data Structure: Using Map to store stock levels
let stockLevels = new Map();
stockLevels.set("Beans", 5000);
stockLevels.set("Maize", 3000);
// Add more as needed

// Function to view stock status without logging in
function viewStockStatus() {
    // Implementation to display stock levels
}

// Function to generate a receipt for a sale
function generateReceipt(salesRecord) {
    // Implementation to generate a receipt
}
