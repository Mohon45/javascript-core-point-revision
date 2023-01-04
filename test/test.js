// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
// }

// (function() {
//     var a = b = 5;
//   })();

//   console.log(b);

// function timeConvert(n) {
//     var num = n;
//     var hours = (num / 60);
//     var rhours = Math.floor(hours);
//     var minutes = (hours - rhours) * 60;
//     var rminutes = Math.round(minutes);
//     return  rhours + ":" + rminutes;
//     }

//     console.log(timeConvert(200));

// var str = "abcdefoihewfojias";

// var result = str.replace(/(...)./g, "$1|");

// console.log(result);

// var str = "abcdefoihewfojias".split("");

// for (var i = 0; i < str.length - 1; i+=4) {
//      str[i] = "X";
// }
// console.log( str.join("") );

// const array = ["one", "two", "three"]
// array.forEach(function (item, index) {
//   let j
// });

// var arry = [ "78",
// "100",
// "92",
// "86",
// "89",
// "88",
// "91",
// "87"];

// let res = arry.reduce(function(prev, curr){
//     return (Number(prev) || 0) + (Number(curr) || 0);
// });

// const gor = res / 8;
// console.log(gor); // prints 45

// const array = ['1', '2', '4', '5'];
// let sum = 0;
// array.forEach(element => {
//      let a = parseInt(element);

//      let b = sum += a;
//      // console.log(b)
// });
// console.log(b)

// const arr = ['10', '20', '30', '40'];
// for (i = 10, i)

// let result = 0;
// arr.forEach(number => {
//      let a = parseInt(number);
//      // console.log(a)
//   result += a;
// })
// console.log(result); // Output: 100

// const a = JSON.parse(array);
// // console.log(a);
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

// const arr = ['10', '20', '30', '40'];

// for (let a of arr){
//      console.log("Number" + a[i] + " " + a)
// }
// arr.forEach((num, idx) => console.log("Number" + " " + (idx + 1) + " " + num));
// const user = "string 2";

// let arr = [
//   { name: "string 1", value: "this", other: "that" },
//   { name: "string 2", value: "this1", other: "that" },
//   { name: "string 3", value: "this", other: "that" },
//   { name: "string 4", value: "this", other: "that" },
//   { name: "string 5", value: "this", other: "that" },
//   { name: "string 6", value: "this", other: "that" },
//   { name: "string 7", value: "this", other: "that" },
//   { name: "string 2", value: "this2", other: "that" },
// ];

// let obj = arr.find((o) => o.name === "string 2");
// console.log(obj);

// arr.map((item) => {
//      if(item.name === user){

//      }
//   console.log(item);
// });
// let array1 = [];

// arr.filter((element, index) => {
//   // console.log(element);
//   const result = element.value.includes("string");
//   console.log(result);
// });

// const result = arr.includes

// const result = arr.filter((word) => word.name === "string 2");
// array1.push(result);

// console.log(result);

// const example = (param1, param2) => {
//   const vag = param1 / param2;
//   const vagfol = param1 % param2;
//   console.log(vag + " and " + vagfol);
// };

// const callbackTester = (callback, param1, param2) => {
//   callback(param1, param2);
// };

// callbackTester(example, 10, 3);

// var element = { name: "Md.Mohon", roll: "419310" };
// element.push({ id: 1, quantity: "quantity" });

// console.log(element);

// {
// 	"name": "Jhanker Mahbub",
// 	"email": "jhankermhabub@gmail.com",
// 	"PhoneNumber": "01782638193",
// 	"address": "Puthia, Rajshahi",
// 	"designation": "Teacher",
// 	"teachingSubjects": {"Math", "Physics", "Biggan"},
// 	"teachingClass": {6,7,8,9,10},
// 	"currentEmployee": "Sikkha Board School & Collage",
// 	"position": "Assistant teacher"
// }

const examples = ["1", "2", "3", "4"];

const result = examples.map((example) => console.log(example));
