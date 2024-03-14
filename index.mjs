// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log("Do these number add up to 50? " + isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log("Are there at least 2 odd numbers? " + isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("Is any number larger than 25? " + isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("Are the numbers all unique? " + isUnique)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  console.log("\n\n\nStart of Part 1\n\n");


// Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisableBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("Are all numbers divisable by 5? " + allDivisableBy5);

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = n1 > n4;

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let num = n2-n1;
num = num * n3;
num = num % n4;

// Change the way that isOver25 calculates so that we do not need to use the
// NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const allUnder25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
console.log("Are the numbers all less than 25? " + allUnder25);

//End of Part 1




//Begining of Part 2
console.log("\n\n\nStart of Part 2\n\n");


// The distance of the trip, in total, is 1,500 miles.
const tripMiles = 1500;
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
const mpg55 = 30;
// At 60 miles per hour, you get 28 miles per gallon.
const mpg60 = 28;
// At 75 miles per hour, you get 23 miles per gallon.
const mpg75 = 23;
// You have a fuel budget of $175.
const totalBudget = 175;
// The average cost of fuel is $3 per gallon.
const costGal = 3;

// How many gallons of fuel will you need for the entire trip?
const gallonsNeeded55 = tripMiles/mpg55;
const gallonsNeeded60 = tripMiles/mpg60;
const gallonsNeeded75 = tripMiles/mpg75;
// Will your budget be enough to cover the fuel expense?
const cost55mph = gallonsNeeded55*costGal;
const cost60mph = gallonsNeeded60*costGal;
const cost75mph = gallonsNeeded75*costGal;
const enoughBudget55 = totalBudget >= cost55mph;
const enoughBudget60 = totalBudget >= cost60mph;
const enoughBudget75 = totalBudget >= cost75mph;
// How long will the trip take, in hours?
const tripTime55 = tripMiles/55;
const tripTime60 = tripMiles/60;
const tripTime75 = tripMiles/75;



console.log(`You will need ${gallonsNeeded55.toFixed(2)} gallons at 55mph to get to your destination in ${tripTime55.toFixed(2)} hours.`);
// console.log("You will need " + gallonsNeeded55.toFixed(2) + " gallons");
console.log(`Will you make it with a budjet of ${totalBudget}? ${enoughBudget55}`);
console.log(" ");
console.log(`You will need ${gallonsNeeded60.toFixed(2)} gallons at 60mph to get to your destination in ${tripTime60.toFixed(2)} hours.`);
console.log(`Will you make it with a budjet of ${totalBudget}? ${enoughBudget60}`);
console.log(" ");
console.log(`You will need ${gallonsNeeded75.toFixed(2)} gallons at 75mph to get to your destination in ${tripTime75.toFixed(2)} hours.`);
console.log(`Will you make it with a budjet of ${totalBudget}? ${enoughBudget75}`);

// if (enoughBudget75){
//     console.log("You are within budget");
// }else{
//     console.log("You are not within budget");
// }