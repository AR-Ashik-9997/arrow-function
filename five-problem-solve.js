// Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (a, b, c) => a * b * c;
console.log(multiply(3,4,5));
// Write the following sentence in three lines and print the result:I am a web developer. I love to code. I love to eat biryani.
const str =
  "I am a web developer." +
  " " +
  "I love to code." +
  " " +
  "I love to eat biryani.";
console.log(str);

// Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add=(a,b=0)=>a+b;
console.log(add(2));

// Check if the length of each element is even, push elements with even length to a new array and return the result
const evenStr = (strArray) => {
  const evenStr = [];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length % 2 == 0) {
      evenStr.push(strArray[i]);
    }
  }
  return evenStr;
};

const friends = [
  "abul",
  "kabul",
  "salman",
  "kalam",
  "salam",
  "ashikur",
  "babu",
  "kalu",
  "allu",
  "sakhawat",
];
console.log(evenStr(friends));

// Return the average of the sum of the squared elements
const squareAvg = (numberOfArray) => {
  let sum = 0;
  const squarArray = [];
  for (const element of numberOfArray) {
    squarArray.push(Math.pow(element, 2));
  }
  for (const sumElement of squarArray) {
    sum += sumElement;
  }
  const avg = parseFloat((sum / squarArray.length).toFixed(2));
  return avg;
};
const number = [
  1, 3, 2, 5, 4, 8, 6, 7, 12, 56, 41, 23, 15, 425, 6, 87, 98, 42, 34,
];
console.log(squareAvg(number));

// Combine the two arrays and assign them in a new array and Find the maximum number from the new array and return the result

const maximumnumber = (firstArray,secondArray)=>{
    const combineArray = [];
    combineArray.push(...firstArray,...secondArray);
    const maximumnumber=Math.max(...combineArray);
     return maximumnumber;
    
}
const number1 = [1, 3, 2, 5, 4, 8, 6, 7, 12, 56, 41, 2];
const number2 = [3, 15, 425, 6, 87, 98, 42, 34]; 
maximumnumber(number1,number2);

let array1 = [1,2,3,4,5,6,7];
array1=[];
