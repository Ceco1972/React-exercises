//import { apiKey } from "./util.js";
//import apiKey from "./util.js";
//console.log(apiKey);
//let userName = "Hello world with variable";
//console.log(userName);
//console.log(4 - 1);
//console.log(10===10);
//console.log(9 <= 10);
//function greetUser(userName, message) {
//console.log(message);
//console.log(userName);
//return "Hi, " + userName + message;
//}

//const greeting = greetUser("Pete. ", "What is up?");

//console.log(greeting);
// export default function (){
//     console.log("Hello");
// }

// export default (userName, message) => {]
//     console.log('Hi export defualt faunction');
//     return userName + message;
// }

// const user = {
//   name: "Max",
//   age: 9,
//   greet() {
//     // console.log("object function here");
//     console.log(this.age);
//   },
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
//user.greet();

// class User {
//   constructor(userName, age) {
//     (this.userName = userName), (this.age = age);
//   }
//   greet() {
//     console.log("Hi");
//   }
// }
// const user1 = new User("Peter", 57);
// console.log(user1.userName);

// user1.greet();
// const hobbies = ["football", "tennis", "swimming"];
// hobbies.push("running");
// console.log(hobbies[3]);
// const index = hobbies.findIndex((item) => {
//   return item === "running";
// });
// const index2 = hobbies.findIndex((item) => item === "running");

// console.log(index2);

// const editedHobbies = hobbies.map((item) => item + "!");

// const editedHobbies2 = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies2);

// function transformToObjects(numberArray) {
//   // Todo: Add your logic
//   // should return an array of objects

//   //   const objectArray = numberArray.map((item) => ({ model: item }));
//   //   return objectArray;

//   const objectArray = numberArray.map((item) => ({ model: item }));
//   return objectArray;
// }

// console.log(transformToObjects(["opel", 3, 6]));

// const myArray = ["tsvetan", "ivanov"];
// const [firstName, lastName] = ["tsvetan", "ivanov"];

// console.log(firstName);

// const user = {
//   name: "Tsvetan",
//   age: 53,
// };

// const {name, age} = {
//   name: "Tsvetan",
//   age: 53,
// };

// console.log(name);

// const { name: firstName, age } = {
//   name: "Tsvetan",
//   age: 53,
// };

// console.log(firstName);

//Destructuring in Function Parameter Lists
// function storeOrder(order) {
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
//   }

// function storeOrder({id. currency}) {
//     localStorage.setItem('id', id);
//     localStorage.setItem('currency', currency);
// }

// storeOrder({id: 5, currency: 'USD', amount: 130});

///... this is the spread operator
// const hobbies = ["football", "tennis"];
// const newHobbies = ["swimmming", "running"];

// const jointHobbies = [...hobbies, ...newHobbies];

// console.log(jointHobbies);

// const user = {
//     name: "tsvetan",
//     age: 53
// }

// const newUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(newUser)
//const password = prompt("Type your password");
// const password = "hello";
// if (password === "hello") {
//   console.log("Welcome");
// } else {
//   console.log("access denied");
// }

// const myArray = ["soccer", "football"];
// for (const sport of myArray) {
//   console.log(sport);
// }

//manupalting the DOM below. But this is not done with REACT
// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("time out");
// }
// const handleTimeout2 = () => {
//   console.log("time out ...again");
// };

// //pass the function as parameter - notice we do not use the parenthesis
// setTimeout(handleTimeout, 2000);
// setTimeout(() => {
//   console.log("time out with anonymous function");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// function gr() {
//   console.log("Hi2");
// }
// greeter(() => console.log("Hi"));
// greeter(gr);

//define functions inside other functions - often done in React - not in JS usually
// function init() {
//   function greet() {
//     console.log("Hi");
//   }
//   greet();
// }
// init();

///object variable is referenced by address. the address is stored in the variable
// const myArray = ["hot", "toomuch"];

// myArray.push("another");
// console.log(myArray);

//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array
// const array = [1, 4, 9, 16];

// // Pass a function to map
// const mapped = array.map((x) => x * 3);

//console.log(mapped);

//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function.
// const array = [12, 14, 5, 9];
// const found = array.find((element) => element > 11);
// console.log(found);

//The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const array2 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array2.findIndex(isLargeNumber));
// Expected output: 3

//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// const words = ["first", "second", "third"];

// const myFilteredWord = words.filter((someWord) => someWord.length > 5);
// console.log(myFilteredWord);

//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
//in order, passing in the return value from the calculation on the preceding element.
//The final result of running the reducer across all elements of the array is a single value.
//The first time that the callback is run there is no "return value of the previous calculation".
//If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

//
// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 1;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator - currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// Expected output: 10

//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);

// console.log(array3);

//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// const array = [1, 5, 8, 56, 100, 555];

// console.log(array.slice(2));
// console.log(array.slice(1, 5));

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
