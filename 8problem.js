// 1.array with even numbers Using Array.map() on Odd to Even
const numberArray = [1,3,5,7,9];
const oddToEven=numberArray.map(even=>even+1);
console.log('Even-Array with array.map():',oddToEven);

// 2.array with even numbers Using forloop on Odd to Even

const even=[];
for(let i=0;i<numberArray.length;i++){
    even.push(numberArray[i]+1);    
}
console.log('Even-Array with for loop:',even);

// all the elements which are divisible by 10 using array.filter() method.

const array1 = [33, 50, 79, 78, 90, 101, 30 ];
const divisible = array1.filter(divide=>divide%10===0);
console.log('Array divisible by 10 with filter():',divisible);

// all the elements which are divisible by 10 using array.find() method.

const findDivisible = array1.find(divide=>divide%10===0);
console.log('Array divisible by 10 with find():',findDivisible);

// all elements of this array and give output. Do this using array.reduce() method.

const array2 = [1,9,17,22];
const total = array2.reduce((previousValue,currentValue)=>previousValue+currentValue,0);
console.log('using reduce():',total);

// using for loop 
let sum=0;
for(const total of array2){
    sum+=total;
}
console.log('using for loop:',total);

// challenging array.reduce()
 const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
 ];

 const output = people.reduce((previousValue,currentValue)=>previousValue+currentValue.age,0);
 console.log('The output will be',output);

 // challenging for loop

 let Output = 0;
 for(const output of people){
    Output+=output.age;    
 }
 console.log('The output will be',Output);

//  Access Object value

const student ={
    name: 'Fredie',
    age: 26,
}
console.log('Student age',student.age);

let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderbad',
            country: 'India',
        }
    ]
}
const city = data.location[0].city;

console.log('the value of',city);

// challenging 5 console log()
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  const UserEmail= user.email;
  const UserAddress= user.address;
  const UserCity= user.address.city;
  const UserLat= user.address.geo.lat;
  const UserCompanyNamae= user.company.name;
console.log('..................................................');
  console.log('The value of email', UserEmail);
  console.log('The value of address', UserAddress);
  console.log('The value of city', UserCity);
  console.log('The value of lat', UserLat);
  console.log('The value of company name', UserCompanyNamae);
