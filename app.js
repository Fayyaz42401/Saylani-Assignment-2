// Saylani Mass & It Traning
// JavaScript Course
// Assignment No# 02

// Question No # 01

// function myFunction(num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// }

// let newFunction = myFunction(5);
// console.log(newFunction(10));

// Question No # 02

// let myArray = [1, 2, 3, 4, 5];
// let value = +prompt("Enter a number");
// function searchArray(arr, val) {
//   if (arr.length === 0) {
//     return false;
//   } else if (arr[0] === val) {
//     return true;
//   } else {
//     return searchArray(arr.slice(1), val);
//   }
// }
// console.log(searchArray(myArray, value));

// Question No # 03

// let p = document.getElementById("para");

// function myPara() {
//   p.innerText = "Updated Paragraph";
// }



// Question No # 04


// function addListItemToList(listId, itemText) {
//     const ul = document.getElementById(listId); 
//     const li = document.createElement("li"); 
//     li.textContent = itemText;
//     ul.appendChild(li); 
//   }
  
  
  




// Question No # 05

// function changeBackground(element, bgColor, color) {
//   element.style.backgroundColor = bgColor;
//   element.style.color = color;
// }

// let bg = document.getElementById("bg");

// Question No # 06

// function saveObject(key, obj) {
//   let json = JSON.stringify(obj)
//   localStorage.setItem(key , json)
// }

// const myObject = {
//   name: prompt("Enter Your Name"),
//   age: +prompt("Enter Your Age"),
//   rollNo: +prompt("Enter Your Roll No"),
//   tutor: prompt("Enter Your Tutor Name"),
// };

// saveObject('data' , myObject)

// Question No # 07

// function getObjectFromLocalStorage(key) {
//     const json = localStorage.getItem(key);
//     const obj = JSON.parse(json);
//     return obj;
//   }

//   const myObject = getObjectFromLocalStorage("myKey");
//   console.log(myObject);


// Question No # 08



// function saveObjectPropertiesToLocalStorage(obj) {
//   for (const [key, value] of Object.entries(obj)) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
//   const newObj = {};
//   for (const key in obj) {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   }
//   return newObj;
// }

// // Example usage:
// const myObject = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
// console.log(retrievedObject);
