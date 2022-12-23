// let a1 = 1 + 2;
// alert(a1);
// // let a = 10;
// // let b = 20;
// // let c = 30;
// // alert(a + b + c);
// // let a = 2;
// // let b = 3;
// // let c = a + b;
// // alert(c);
// // let d = 4;
// // alert(c + d);
// //-----------Negative numbers---------------
// // let a = 1.5;
// // let b = 0.75;
// // alert(a + b);
// //---------------Remainder of the division------------------
// // let a = 13;
// // let b = 5;
// // alert(a % b);
// //--------------Exponentiation------------
// let a = 2 * 3 ** 2 * 3;
// alert(a);
// //---------------Strings------
// let str = "baktiar uulu erbol";
// alert(str);
// //--------------String addition------------
// let text = "java";
// let text1 = "script";
// alert(text + text1);
// let name = "baktiaruuluerbol";
// alert(name.length);
// //----------------Multiline----------
// let ster = `a,
// b, c`;
// alert(ster);
// let as = 10;
// let ass = 0;
// alert(10 / 0);
// //--------------------Convert to string----------
// let num = 12345;
// alert(num.length);
// let num1 = 12345;
// alert(String(num).length);
// console.log(num + num1);
//-----------------Getting the characters of a string-------------
// let tun = "abcde";
// console.log(tun[tun.length - 2]);
// alert(0.1 * 0.23);
// let name = prompt("ведите имя");
// alert("erbol" + name);
// document.write("text <br>");
// document.write("text <br>");
// alert(1024 * 1024);
// document.write(1024 * 1024);
//--------------Arrays-----------------
// const arr = [1, 2, 3];
// console.log(arr.length);
// const arrr = ["a", "b", "c"];
// arrr[1] = 1;
// console.log(arrr);
// let a = [1, 2, 3];
// a[3] = 4;
// a[4] = 5;
// alert(a);
// let b = [];
// b[1] = "a";
// b[2] = "2";
// console.log(b.length);
// let c = [];
// c.push("a");
// c.push("b");
// c.push("c");
// delete c[1];
// console.log(c.length);
//////////Objects in JavaScript----------------------
// let obj = {
//   1: "панидельник",
//   2: "вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
//   6: "Субота",
//   7: "Воскресение",
// };
// console.log(obj);
// const date = { год: 2022, месяц: 12, день: 11 };
// console.log(date);
// let obj1 = { x: 1, y: 2, z: 3 };
// obj1["x"] = 1;
// obj1["y"] = 4;
// obj1["z"] = 6;
// console.log(obj1);
// const obj2 = {};
// obj2["a"] = 1;
// obj2["b"] = 2;
// obj2["c"] = 3;
// console.log(obj2);
// // const obj3 = { 7: "a", 50: "b", 2: "c" };
// // const keys = Object.keys(obj3);
// // console.log(keys.length);
// const obj4 = { a: 2, b: 3, c: 3 };
// const key = ["a"];
// console.log(key);
// const obj5 = { name: "erbol", sourname: "baktiar" };
// const keys = Object.keys(obj5);
// console.log(keys);
// const obj6 = { a: 2, b: 3, c: 4 };

// console.log(typeof obj6["a"]);
// console.log(typeof { a: 1, b: 2, c: 3 });
// const arr = ["a", "b", "c"];
// ar = ["a", "b", "c"];
// console.log(arr);
// const arrr = [1, 2, 3, 4, 5];
// let res = arrr[1] + arrr[2];
// console.log(res);
// //---------------------Terms------------------
// let test = 1;
// if (test != 10) {
//   console.log("+++");
// } else {
//   console.log("---");
// }
// const test1 = 2;
// const test2 = 2;
// if (test1 != test2) {
//   console.log("+++");
// } else {
//   console.log("---");
// }
// const test3 = "123";
// const test4 = 123;
// if (test3 == test4) {
//   console.log("+++");
// } else {
//   console.log("---");
// }
// const num = 2;
// const num1 = 4;
// if (num < 2 && num1 > 3) {
//   console.log("===");
// } else {
//   console.log("--1");
// }
// const num2 = 2;
// if (num2 > 3 || (num2 == 1 && num2 < 3(num == -2 || (num2 == 5 && num2 < 1)))) {
//   console.log("++1");
// } else {
//   console.log("---");
// }
// const str = 2;
// const str1 = 3;
// if (!(str > 1 && str1 < 1)) {
//   console.log("1");
// } else {
//   console.log("2");
// }
// let test6 = false;
// if (test6 == false) {
//   console.log("==_");
// } else {
//   console.log("++-");
// }
//-------------------Nested if-else construct-------------------
// const test = 0;
// if (!test) {
//   console.log("+++");
// } else {
//   console.log("---");
// }
// let test1 = true;
// let test2 = true;
// let test3 = true;
// if (test1 || (!test2 && !test3)) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// const num = 3;
// if (num < 5) {
//   console.log("yes");
// }
// const tell = 9;
// if (tell == 0) console.log("+++");
// else console.log("__-");
// const num2 = 2;
// if (num2 >= 3) {
//   if (num2 <= 3) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// } else {
//   console.log(num2 + num2);
// }
// const num5 = 12;
// if (9 < num5 < 99) {
//   if (num >= 9) {
//     console.log("Однозначный чисель");
//   }
//   console.log(9 + 99);
// } else {
//   console.log("Это двухзначный чисель");
// }
// //---------------------switch-case construction---------------
// let lang = "en";
// switch (lang) {
//   case "ru":
//     console.log("ru");
//     break;
//   case "en":
//     console.log("en");
//     break;
//   case "de":
//     console.log("deutschland");
//     break;
//   default:
//     console.log("не поддерживается");
//     break;
// }
// let num1 = 1;
// let res;
// switch (num) {
//   case 1:
//   case 2:
//     res = "a";
//     break;
//   case 3:
//     res = "b";

//     break;
// }
// console.log(res);
// //--------------------Ternary operator in JavaScript----------------
// let num3 = 4;

// let res2 = num3 >= 2 ? "aaa" : "bbb";
// console.log(res2);
// let num4 = 19;
// let ress = num4 >= 18 ? "тебе можно" : "нет";
// console.log(ress);
// //--------------------------------Boolean operations in JavaScript--------------------

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);
// let a1 = 2 * (3 - 1);
// let b1 = 6 - 2;
// let result = a == b;
// console.log(result);
// let c = 5 * (7 - 4);
// let d = 1 + 2 + 7;
// console.log(c > d);
// let c1 = 2 ** 4;
// let d1 = 4 ** 2;
// let result1 = c1 != d1;
// console.log(result1);
//-----------------------Validation Function in JavaScript---------------
// let ok = confirm("вам 18 лет ");
// if (ok) {
//   console.log("заходите");
// } else {
//   console.log("нельзя");
// }
// const con = confirm("вы человек или бот");
// if (con) {
//   console.log("заходите");
// } else {
//   console.log("вам нельзя");
// }
// //----------------------------------Variable scope in if-else in JavaScript-----------
// let num6 = 17;
// let adult;
// if (num6 >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }
// console.log(adult);

// let age = 17;
// let res3;
// if (age >= 18) {
//   if (17 <= 23) {
//     res3 = "от 18 до 23";
//   } else {
//     res3 = "больше 23";
//   }
// } else {
//   res3 = "меньше 18";
// }
// console.log(res3);
// let age1 = 19;
// let res4;
// if (age1 >= 18) {
//   res4 = true;
//   if (19 <= 23) {
//     res4 = "от 18 до 23";
//   } else {
//     res4 = "больше 23";
//   }
// } else {
//   res4 = "меньше 18";
// }
// console.log(res4);
// const min = 10;
// if (min >= 0 && min <= 14) {
//   console.log("1 четверт");
// }
// if (min >= 15 && min < 29) {
//   console.log("2 четверт");
// }
// if (min >= 30 && min <= 44) {
//   console.log("3четверт");
// }
// if (min >= 45 && min <= 59) {
//   console.log("4 четверт");
// }
// const arr = "12345";
// if (arr.length >= 3) {
//   console.log(arr.length);
// }
// const stre = "1234";
// if ((stre[0] = "a")) {
//   console.log("!");
// }
// const str1 = "12345";
// const last = str1[str1.length - 1];
// if (last == "x") {
//   console.log("X");
// }
// const street = "12345";
// if (street[0] == 1 || street[1] == 1) {
//   console.log("yes");
// }
// const nun = 12345;
// let first = String(nun)[-1];
// if (first == 0) {
//   console.log("first");
// } else {
//   console.log("no");
// }
// const aa = 10;
// const bb = 5;
// console.log(aa % bb);
// let num7 = "123033";
// let sum1 = num7[0] + num7[1] + num7[2];
// let sum2 = num7[3] + num7[4] + num7[5];
// if (sum1 == sum2) {
//   console.log("суммы равны");
// } else {
//   console.log("суммы не равны");
// }
// //---------------------------------------Practice on if-else conditions in JavaScript------------------
// const month = 5;
// switch (month) {
//   case 1:
//     console.log("зима");

//     break;
//   case 2:
//     console.log("весна");
//     break;
//   case 4:
//     console.log("лето");
//     break;
//   case 5:
//     console.log("осень");
// }
// const str2 = "abcde";
// if ((str2[0] == "a")) {
//   console.log("да");
// } else {
//   console.log("нет");
// }
// const numbers = 123;
// const numb = String(numbers);
// console.log(numb.length);
// const number = "246012";
// summ = number[0] + number[1] + number[3];
// summ1 = number[4] + number[5] + number[6];
// if (summ == summ1) {
//   console.log("yes!!!");
// } else {
//   console.log("no!!!");
// }

// const dd = 0;
// if (dd == 0) {
//   console.log("(x = (b / 2) * a)");
// } else if (dd >= 0) {
//   if (dd > 0) {
//     console.log((x1 = "9"), (x2 = "12"));
//   } else if (dd < 0) {
//     console.log("d = !");
//   }
// }
// let d = 0;

// if (d == 0) {
//   console.log("d is equal to 0");
// }

// if (d < 0) {
//   console.log("d is less than 0");
// } else {
//   console.log("d is not less than 0");
// }

// if (d > 0) {
//   console.log("d is greater than 0");
// } else {
//   console.log("d is not greater than 0");
// }
// //-------------------------for loop in JavaScript-----------------
// let i = 1;
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }
// for (let k = 100; k >= 0; k--) {
//   console.log(k);
// }
//----------------------------------------Перебор массива циклом for-of в JavaScript--------------------------------
// let lam = ["a", "b", "c", "d"];
// for (let elem of lam) {
//   console.log(elem);
// }
// //------------------------Iterating over an object with a for-in loop in JavaScript------------------------------
// let objj = { a: 1, b: 2, c: 3 };
// for (let key in objj) {
//   console.log(key);
// }
// let object = { a: 1, b: 2, c: 3, d: 4 };
// for (let key in object) {
//   console.log(object[key]);
// }
// let kat = { x: 1, y: 2, z: 4 };
// for (let key in kat) {
//   console.log(kat[key]);
// }
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }
// let num = 3;
// while (num <= 1000) {
//   console.log(num);
//   num = num * 3;
// }
//----------------------------for loop for arrays in javascript---------------------------
// let arr = ["a", "b", "c", "d"];
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }
// let arr1 = ["a", "b", "c", "d"];
// for (let i = 1; i <= [2]; i++) {
//   console.log(arr1[i]);
// }
let arr5 = ["a", "b", "c", "d"];
for (let i = arr5.length - 1; i >= 0; i--) {
  console.log(arr5[i]);
}
// let arr3 = ["a", "b", "c", "d"];
// for (let i = arr3.length - 1; i >= 0; i--) {
//   console.log(arr3[i]);
// }
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   if (elem % 2 === 0) {
//     console.log(elem);
//   }
// }
// let arr1 = [2, 5, 9, 15, 1, 4];
// for (let elem of arr1) {
//   if (elem > 3 && elem < 10) {
//     console.log(elem);
//   }
// }
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let eleem in obj) {
//   if (obj[eleem] % 2 !== 0) {
//     console.log(obj[eleem]);
//   }
// }
// let obj1 = { a: 12, b: 462, c: 2446, d: 23344, e: 345 };
// for (let key in obj1) {
//   if (obj1[key] % 3 == 0) {
//     console.log(obj1[key]);
//   }
// }
//-------------------Accumulating Numbers in JavaScript Loops---------------------
// let res = 0;
// for (let i = 1; i <= 100; i++) {
//   res = res + i;
// }
// console.log(res);
// let num = 2;
// for (let i = 2; i <= 200; i += 2) {
//   console.log(i);
// }
// let sum = 1;
// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }
// let num1 = 1;
// for (let i = 1; i <= 20; i++) {
//   num1 += i;
// }
// console.log(num1);
// //---------------------------Accumulating Array Elements in JavaScript Loops----------------------
// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let el of arr) {
//   res += el;
// }
// console.log(res);
// let arr1 = [2, 5, 9, 3, 1, 4];
// let set = 0;
// for (let elem of arr1) {
//   set += elem;
// }
// console.log(set);
// let arr2 = [2, 5, 9, 3, 1, 4];
// let sum = 0;

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] % 2 == 0) {
//     sum += arr2[i];
//   }
// }
// console.log(sum);
// let arr = [2, 5, 9, 3, 1, 4];
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum1 += arr[i] ** 2;
// }
// console.log(sum1);
// let arr2 = [2, 5, 9, 3, 1, 4];
// sum = 0;
// for (let elem of arr2) {
//   sum += elem;
// }
// console.log(sum);
// let str = "";
// for (let i = 1; i <= 5; i++) {
//   str += i;
// }
// console.log(str);
// let str1 = "";
// for (let i = 0; i <= 9; i++) {
//   str1 += i;
// }
// console.log(str1);
// let str2 = "";
// for (let i = 9; i >= 1; i--) {
//   str2 += i;
// }
// for (let i = 1; i <= 100; i++) {
//   let str = String(i); // преобразуем число в строку

//   if (str[0] === "1" || str[0] === "2") {
//     console.log(i);
//   }
// }
// let sum = 0;
// for (let i = 10; i <= 1000; i++) {
//   let str = String(i);
//   if (str[0] === "5" && str[1] === "5") {
//     console.log(str);
//   }
// }
// //---------------------------JavaScript break statement---------------------------------------
// let sam = [1, 2, 3, 4, 5, 6, 0, 9, 78, 6];
// for (let i = 0; i < sam.length; i++) {
//   if (sam[i] == 0) {
//     break;
//   }
//   console.log(sam[i]);
// }
// let sat = [1, 2, 3, 4, 5, 6, 7, 0, -9, -4];
// for (let i = 0; i < sat.length; i++) {
//   if (sat[i] == -9) {
//     break;
//   }
//   console.log(sat[i]);
// }

// let sum = 1;
// let i = 1;
// while (sum <= 100) {
//   sum += i;
//   i++;
// }
// console.log(i - 1);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
//   let result;
//   if (elem % 2 === 0) {
//     result = elem * elem;
//   } else if (elem % 3 === 0) {
//     result = elem * elem * elem;
//   } else {
//     continue;
//   }

//   console.log(result);
// }
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) {
//     document.write(i);
//   }
// }
// for (let i = 1; i <= 33; i++) {
//   let str = String(i);
//   for (let j = 1; j <= 3; j++) {
//     if (str[1] === "1" && str[1] === "1") {
//       console.log(i + "" + j);
//     }
//   }
// }
// //--------------------------------Область видимости в циклах JavaScript---------------------
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);
// let arr1 = [];
// for (let i = 1; i <= 10; i++) {
//   arr1.push("x");
// }
// console.log(arr1);
// let arr2 = [1, 2, 3, 4, 5, 6];
// for (let i = 9; i <= 20; i++) {
//   arr2.push(i);
// }
// console.log(arr2);
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] ** 2;
// }
// console.log(arr);
// let arr1 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr1.length; i++) {
//   arr1[i] += 10;
// }
// console.log(arr1);
//-------------------------------Заполнение объектов через цикл в JavaScript-------------
// let keys = ["a", "b", "c", "d", "e"];
// let values = [1, 2, 3, 4, 5];
// let obj = {};
// for (let i = 0; i <= 4; i++) {
//   obj[keys[i]] = values[i];
// }
// console.log(obj);
// let arr1 = ["панидельник", "вторник", "среда", "чт", "пт", "субота", "вс"];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj1 = {};
// for (let i = 0; i <= 10; i++) {
//   obj1[arr1[i]] = arr2[i];
// }
// console.log(obj1);
// let obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let elem in obj2) {
//   if (obj2[elem] % 2 == 0) {
//     console.log(obj2[elem]);
//   }
// }
// let obj3 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let obj4 = {};
// for (let key in obj3) {
//   obj4[obj3[key]] = key;
// }
// console.log(obj4);
// let obj5 = { a: 1, b: 2, c: 3 };
// for (let key in obj5) {
//   obj5[key] = obj5[key] ** 2;
// }
// console.log(obj5);
// let arr = ["a", "b", "c", "d", "e"];
// let flag = false;
// for (let elem of arr) {
//   if (elem == 3) {
//     flag = true;
//     break;
//   }
// }
// if ((flag = true)) {
//   console.log("++");
// } else {
//   console.log("--");
// }
// let arr1 = [3, 11, 26];
// let Flag = false;
// for (let el of arr1) {
//   if (el % 1 === 0) {
//     Flag = true;
//     break;
//   }
// }
// if (Flag == true) {
//   console.log("+++");
// } else {
//   console.log("---");
// }
// let arr2 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// for (let elem of arr2) {
//   if (elem == 3 || elem == 2) {
//     counter++;
//   }
// }
// console.log(counter);
// let arr3 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter1 = 0;
// let counter2 = 0;
// for (let sat of arr3) {
//   if (sat == 2) {
//     counter1++;
//   } else if (sat == 3) {
//     counter2++;
//   }
// }
// console.log(`two:${counter1} , three:${counter2}`);
// let str = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = {};
// for (let sam of str) {
//   if (count[sam] === undefined) {
//     count[sam] = 1;
//   } else {
//     count[sam]++;
//   }
// }
// console.log(count);
// let str1 = [1, 2, 3, 4, 5, 6];
// for (let i = 1; i <= str1.length; i++) {
//   console.log(str[i - 1] + str1[i]);
// }
// let ar = [10, 20, 30, 40, 21, 32, 51];
// let st = String(ar);
// let sum = 0;
// for (let tel of ar) {
//   if (tel[0] == 1 || tel[1] == 2) {
//     console.log(tel);
//   }
// }
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// let as = [];
// for (let i = 1; i <= 10; i++) {
//   as.push("x");
// }
// console.log(as);
// let ad = [];
// for (let i = 10; i > 0; i--) {
//   ad.push(i);
// }
// console.log(ad);
// let str = [1, 3, 4, 5, 6, 12, 23, , 2, 12];
// for (let el of str) {
//   if (el >= 0 && el <= 10) {
//     console.log(el);
//   }
// }
// let str1 = [1, 2, 3, 4, 5, 6];
// for (let el1 of str1) {
//   if (el1 == 3) {
//     console.log("yes");
//     break;
//   } else {
//     console.log("no");
//   }
// }
// let arr = [1, 2, 3, 4, 5, 56];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i] ** 2;
// }
// console.log(sum);
// let arr1 = [1, 2, 3, 4, 5];
// let sas = 0;
// for (let all of arr1) {
//   sas += all;
// }
// console.log(sas);
// let arr2 = [1, 2, 3, 4, 5];
// let sum1 = 0;
// for (let elem of arr2) {
//   sum1 += elem / 5;
// }
// console.log(sum1);
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

let arr2 = [1, 2, 3, 5, 6, 7];
for (let i = arr2.length; i >= 0; i--) {
  console.log(arr2[i]);
}
let arr = [1, 2, 3, 4, 5];
for (let i = 1; i <= arr.length; i++) {
  document.write(i + "<br>");
}
let month = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
for (let i = 0; i < month.length; i++) {
  let day = month[i];
  if (day == "сб" && day == "вс") {
    document.write(`<b>${day}<b>`);
  } else {
    console.log(day);
  }
}
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

let b = [1, 3, 4, 23, 12, 23, 5, 4];
let a = 0;
for (let i = 0; i < b.length; i++) {
  a += b[i] ** 2;
}
console.log(a);
