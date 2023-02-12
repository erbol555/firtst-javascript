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
// let arr5 = ["a", "b", "c", "d"];
// for (let i = arr5.length - 1; i >= 0; i--) {
//   console.log(arr5[i]);
// }
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

// let arr2 = [1, 2, 3, 5, 6, 7];
// for (let i = arr2.length; i >= 0; i--) {
//   console.log(arr2[i]);
// }
// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i <= arr.length; i++) {
//   document.write(i + "<br>");
// }
// let month = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (let i = 0; i < month.length; i++) {
//   let day = month[i];
//   if (day == "сб" && day == "вс") {
//     document.write(`<b>${day}<b>`);
//   } else {
//     console.log(day);
//   }
// }
// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };

// let b = [1, 3, 4, 23, 12, 23, 5, 4];
// let a = 0;
// for (let i = 0; i < b.length; i++) {
//   a += b[i] ** 2;
// }
// console.log(a);
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let sum = [1, 2, 3, 4, 5, -7, -6, -5];
// let s = 0;
// for (let doll of sum) {
//   if (doll > 0) {
//     s += doll;
//   }
//   console.log(s);
// }
// let arr4 = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr4.length; i++) {
//   if (arr4[i][0] === "1" || arr4[i][0] === "2" || arr4[i][0] === "5") {
//     console.log(arr4[i]);
//   }
// }

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   if (
//     String(arr[i])[0] == 1 ||
//     String(arr[i])[0] == 2 ||
//     String(arr[i])[0] == 5
//   ) {
//     console.log(arr[i]);
//   }
// }

// let arr12 = [10, 20, 30, 50, 235, 3000];
// for (let i = arr12)

// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };
// let sum = 0;
// for (let key in obj) {
//   if (obj[key] % 10) {
//     console.log(obj[key]);
//   }
// }
// let sum1 = 0;
// for (let i = 35; i <= 87; i++) {
//   if (i % 7 == 1 || i % 7 == 2 || i % 7 == 5) {
//     console.log(i);
//   }
// }

// let num = 7;
// let flag = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0 ) {
//     flag = false
//     break
//   }
// }

// let num9 = 100;
// let dad = String(num9);
// let flag = true;

// for (let i = 2; i < 100; i++) {
//   for (let doll = 2; doll < i; doll++) {
//     if (i % doll === 0) {
//       flag = false;
//       break;
//     }
//     console.log(i);
//   }
// }

// if (flag) console.log("простое");
// else console.log("не простое");

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }
// let sol = [1, 2, 3, 4, 5, 6];
// let dol = [];
// for (let i = 10; i > 0; i--) {
//   dol.push(i);
// }
// console.log(dol);
// let arr = [10, 20, 30, 50, 235, 3000];
// let flag = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] ** 2) {
//     console.log(arr[i]);
//   }
// }
// let str = 123;
// let saw = 0;
// let str1 = String(str);

// if (str1[0] + str1[1] + str1[2]) {
//   console.log(str1);
// } else {
//   console.log("no");
// }
// let num = "246246";

// // let sum;
// // let sum1;
// sum = num[0] + num[1] + num[2];
// sum1 = num[3] + num[4] + num[5];

// if (sum == sum1) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// let san = [];
// for (let i = 1; i <= 10; i++) {
//   san.push("x");
// }
// console.log(san);
// let arr2 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let sum6 = 0;
// sum6 +=
//   arr2[0][0] + arr2[0][1] + arr2[1][0] + arr2[1][1] + arr2[2][0] + arr2[2][1];
// console.log(sum6);
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// sum +=
//   arr[0][0][0] +
//   arr[0][0][1] +
//   arr[0][1][0] +
//   arr[0][1][1] +
//   arr[1][0][0] +
//   arr[1][0][1] +
//   arr[1][1][1] +
//   arr[1][1][0];

// console.log(sum);
// let arr1 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8],
//   [9, 10],
// ];
// for (let subarr of arr1) {
//   for (let elem of subarr) {
//     console.log(elem);
//   }
// }
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let subarr of arr) {
//   for (let elem of subarr) {
//     sum += elem;
//   }
//   console.log(sum);
// }
// let arr1 = [[1, 2, 3], [4, 5], [6]];
// let sum1 = 0;
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1[i].length; j++) {
//     sum1 += arr1[i][j];
//   }
// }
// console.log(sum1);
// let arr2 = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum2 = 0;
// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2[i].length; j++) {
//     for (let k = 0; k < arr2[i][j].length; k++) {
//       sum2 += arr2[i][j][k];
//     }
//   }
// }
// console.log(sum2);
// let arr3 = [];
// for (let i = 0; i < 3; i++) {
//   arr3[i] = [];
//   for (let j = 0; j < 5; j++) {
//     arr3[i].push(j + 1);
//   }
// }
// console.log(arr3);
// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 4; j++) {
//     arr[i].push("x");
//   }
// }
// console.log(arr);
// let arr1 = [];
// for (let i = 0; i < 3; i++) {
//   arr1[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr1[i][j] = [];
//     for (let k = 0; k < 5; k++) {
//       arr1[i][j][k] = k + 1;
//     }
//   }
// }
// console.log(arr1);
// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];

//   for (let j = 1; j <= 5; j++) {
//     arr[i].push(j);
//   }
// }

// console.log(arr);
// let arr2 = [];
// let sum = 1;
// for (let i = 0; i < 4; i++) {
//   arr2[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr2[i][j] = i * 2 + j + 1;
//   }
// }
// console.log(arr2);
// let arr4 = [];
// for (let i = 0; i < 4; i++) {
//   arr4[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr4[i][j] = 2 * (i * 3 + j + 1);
//   }
// }
// console.log(arr4);
// let sar = [];
// for (let i = 0; i < 4; i++) {
//   sar[i] = [];
//   for (let j = 0; j < 2; j++) {
//     sar[i][j] = [];
//     for (let k = 0; k < 2; k++) {
//       sar[i][j] = 1 * (i * 2 + j + 1);
//     }
//   }
// }
// console.log(sar);
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
//   arr[i] = [];

//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = k++;
//   }
// }

// console.log(arr);
// //---------------------------Multidimensional Objects in JavaScript------------------
// let obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };
// console.log(
//   obj.key1.key1 +
//     obj.key1.key2 +
//     obj.key1.key3 +
//     obj.key2.key1 +
//     obj.key2.key2 +
//     obj.key2.key3 +
//     obj.key3.key1 +
//     obj.key3.key2 +
//     obj.key3.key3
// );
// let obj1 = {
//   1: {
//     1: "a1",
//     2: "a2",
//     3: "a3",
//   },
//   2: {
//     1: "b1",
//     2: "b2",
//     3: "b3",
//   },
//   3: {
//     1: "c1",
//     2: "c2",
//     3: "c3",
//   },
// };
// console.log(obj1[2][2] + " " + obj1[3][1]);
// let obj2 = {
//   key1: {
//     a: 1,
//     b: 2,
//     c: {
//       d: 3,
//       e: 4,
//     },
//     f: 5,
//   },
//   key2: {
//     g: 6,
//     h: 7,
//   },
// };
// console.log(
//   obj2.key1["a"] +
//     obj2.key1["b"] +
//     obj2.key1["c"]["d"] +
//     obj2.key1["c"]["e"] +
//     obj2.key1["f"] +
//     obj2.key2["g"] +
//     obj2.key2["h"]
// );
//--------------------terating over multidimensional objects in JavaScript----------
// let sum = 0;
// let obj3 = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };
// for (let key in obj3) {
//   let subobj = obj3[key];
//   for (let sanobj in subobj) {
//     sum += subobj[sanobj];
//   }
// }
// console.log(sum);
// let sum1 = 0;
// let obj = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };
// for (let key in obj) {
//   let subbobj = obj[key];
//   for (let adobj in subbobj) {
//     let aobj = subbobj[adobj];
//     for (let werobj in aobj) {
//       sum1 += aobj[werobj];
//     }
//   }
// }
// console.log(sum1);
// let students = {
//   group1: ["name11", "name12", "name13"],
//   group2: ["name21", "name22", "name23"],
//   group3: ["name31", "name32", "name33"],
// };
// console.log(students["group3"][0]);
// //---------------------------------Iterating over multidimensional JavaScript structures-----------------
// let data = {
//   1: ["data11", "data12", "data13"],
//   2: ["data21", "data22", "data23"],
//   3: ["data31", "data32", "data33"],
//   4: ["data41", "data42", "data43"],
// };
// for (let key in data) {
//   let wedata = data[key];
//   for (let werdata of wedata) {
//     console.log(werdata);
//   }
// }
// let data1 = [
//   {
//     1: "data11",
//     2: "data12",
//     3: "data13",
//   },
//   {
//     1: "data21",
//     2: "data22",
//     3: "data33",
//   },
//   {
//     1: "data31",
//     2: "data32",
//     3: "data33",
//   },
// ];
// for (let subdata of data1) {
//   for (let key in subdata) {
//     console.log(subdata[key]);
//   }
// }
// let data2 = [
//   {
//     1: ["data111", "data112", "data113"],
//     2: ["data121", "data122", "data123"],
//   },
//   {
//     1: ["data211", "data212", "data213"],
//     2: ["data221", "data222", "data223"],
//   },
//   {
//     1: ["data411", "data412", "data413"],
//     2: ["data421", "data422", "data423"],
//   },
// ];
// for (let sdata of data2) {
//   for (let keybord in sdata) {
//     let saydate = sdata[keybord];
//     for (let ddata of saydate) {
//       console.log(ddata);
//     }
//   }
// }
//------------------------Массив объектов в JavaScript------------------
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];
// for (let emploe of employees) {
//   console.log(emploe.name + " " + emploe.salary);
// }
// let sum = 0;
// let employees1 = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];
// for (let emploer of employees1) {
//   sum += emploer.salary;
// }
// console.log(sum);
// let sum2 = 0;
// let employees2 = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     age: 31,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     age: 32,
//   },
// ];
// for (let employeess of employees2) {
//   if (employeess.age >= 30) {
//     sum2 += employeess.salary;
//   }
// }
// console.log(sum2);
// //-----------------------------Ключи из переменных в многомерных структурах JavaScript--------------------------------

// let affairs = {
//   2018: {
//     11: {
//       29: ["дело111", "дело112", "дело113"],
//       30: ["дело121", "дело122", "дело123"],
//     },
//     12: {
//       30: ["дело211", "дело212", "дело213"],
//       31: ["дело221", "дело222", "дело223"],
//     },
//   },
//   2019: {
//     12: {
//       29: ["дело311", "дело312", "дело313"],
//       30: ["дело321", "дело322", "дело323"],
//       31: ["дело331", "дело332", "дело333"],
//     },
//   },
// };
// for (let key in affairs) {
//   let affar = affairs[key];
//   for (let saffar in affar) {
//     let saffary = affar[saffar];
//     for (let sybaffar in saffary) {
//       let sabaffarirs = saffary[sybaffar];
//       for (let affa of sabaffarirs) {
//         console.log(affa);
//       }
//     }
//   }
// }
// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };

// let key1 = "key2";
// let key2 = "key4";
// console.log(obj[key1][key2]);
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
// ];
// employees.push({
//   name: "name4",
//   salary: 600,
//   age: 31,
// });
// console.log(employees);
//----------------------Добавление элементов в многомерные объекты JavaScript---------------
// let affairs = {
//   "2019-12-28": ["data11", "data12", "data13"],
//   "2019-12-29": ["data21", "data22", "data23"],
//   "2019-12-30": ["data31", "data32", "data33"],
// };

// affairs["2019-12-29"].push("data24");
// affairs["2019-12-31"] = [];

// console.log(affairs);
// let students = {
//   group1: {
//     subgroup11: ["student111", "student112", "student113"],
//     subgroup12: ["student121", "student122", "student123"],
//   },
//   group2: {
//     subgroup21: ["student211", "student212", "student213"],
//     subgroup22: ["student221", "student222", "student223"],
//   },
//   group3: {
//     subgroup31: ["student311", "student312", "student313"],
//     subgroup32: ["student321", "student322", "student323"],
//   },
// };
// students.group1["subgroup13"] = ["student", "student", "student"];
// students.group4 = {
//   subgroup41: ["student411", "student412"],
//   subgroup42: ["student415", "student416"],
// };
// students.group4.subgroup42.push("student417", "student418");
// students.group4["subgroup41"].push("student413", "student414");

// console.log(students);
//--------------------------Standard Methods-----------------------
// console.log(2 ** 10);
// console.log(Math.sqrt(245));
// let sas = [4, 2, 5, 19, -13, 0, 10];
// let sum = 0;
// for (let retro of sas) {
//   sum += retro ** 3;
// }
// console.log(sum);

// console.log(Math.sqrt(379));
// let san = 19.467922333931785;
// console.log(san.toFixed(4));
// console.log(Math.sqrt(587));
// let sum1 = 24.228082879171435;
// console.log(Math.floor(sum1));
// console.log(Math.ceil(sum1));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// let max = Math.max.apply(null, sas);
// console.log(max);
// let min = Math.min.apply(null, sas);
// console.log(min);
// console.log(Math.pow(6, 7));
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 100));
// let arr = [];
// for (let i = 1; i < 10; i++) {
//   arr.push(getRandomInt(1, 100));
// }
// console.log(arr);
// let a = "a";
// let bb = "b";

// console.log(Math.abs(a && bb));
// let god = "JS";
// console.log(god.toLowerCase());
// let str = "я учу javascript";
// let sub = str.substring(1, 5);
// console.log(sub);
// let sub1 = str.slice(6);
// console.log(sub1);
// let sub2 = str.slice(2, 5);
// console.log(sub2);
// let abs = "abcde";
// console.log(abs.indexOf("http://"));
// let sab = "1-2-3-4-5";

// console.log(sab.split("-"));
// let str5 = [1, 2, 3];
// str5.unshift(4, 5);
// console.log(str5);
// let str2 = ["1", "2", "3"];
// let subb = str2.shift();
// console.log(subb);
// let str3 = ["1", "2", "3"];
// let subb1 = str3.pop();
// console.log(subb1);
// let str6 = [1, 2, 3, 4, 5];
// let tel = str6.slice(1);
// console.log(tel);
// let result = "word1 word2 word3";
// let mas = result.split(" ");
// for (let i = 0; i < mas.length; i++) {
//   mas[i] = mas[i].slice(0, 1).toUpperCase() + mas[i].slice(1);
//   let sad = mas.join(" ");
//   console.log(sad);
// }
// let result1 = "var_test_text";
// let sum = result1.split("_");
// for (let i = 0; i < sum.length; i++) {
//   sum[i] = sum[i].slice(0, 1).toUpperCase() + sum[i].slice(1);
//   let sub = sum.join("");

//   console.log(sub);
// }
// let str = "erbol";
// let str1 = str.split("").reverse().join("");
// console.log(str1);
// let num5 = 12345;
// let sum1 = 1;

// let arr = String(num5);
// let arr1 = arr.split("");

// for (let elem of arr1) {
//   sum1 *= Number(elem);
// }
// console.log(sum1);
// let str = 1234567;
// let sum = 0;
// let substring = String(str).split("");

// for (let elel of substring) {
//   sum += Number(elel);
// }
// console.log(sum);

// let san = [4, 2, 5, 19, 13, 0, 10];
// let summ = 0;
// for (let subsan of san) {
//   summ += subsan ** 3;
// }
// console.log(Math.sqrt(summ));
// let slo = "erbol";
// let slo1 = slo.split("").reverse().join("");
// console.log(slo1);

// // function fanng() {
// //   for (let i = 0; i <= 100; i++) {
// //     console.log(i);
// //   }
// // }
// // fanng();
// let num = -3;
// function fan() {
//   if (num > 0) {
//     console.log("+++");
//   } else if (num < 0) {
//     console.log("---");
//   }
// }

// fan();
// function funct(elem1, elem2, elem3) {
//   console.log(elem1 + elem2 + elem3);
// }
// funct(5, 6, 7);
// function fun() {
//   let param1 = 1;
//   let param2 = 2;
//   let param3 = 3;
//   console.log(param1 + param2 + param3);
// }
// fun();
// function func(num = 5) {
//   console.log(num * num);
// }
// func(2);
// func(3);
// func();
// function fanng(num) {
//   return num ** 2;
// }
// let res = fanng(4) + fanng(3);
// // console.log(res);
// function sqrt(num) {
//   return num * 2;
// }

// function round(num) {
//   return num.toFixed(3);
// }
// let sq = sqrt(4);
// console.log(sq);
// function func(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(func(5));
// function funct(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(funct(3));
// function func(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     // Если сумма больше или равна 10:
//     if (sum >= 5) {
//       return i + 1; // выходим из цикла и из функции
//     }
//   }
// }

// let res = func([1, 2, 3, 4, 5]);
// console.log(res);
// let sa = 100;
// for (i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// function func() {
//   let sum = 0;
//   let i = 1;

//   while (true) {
//     // бесконечный цикл
//     sum += i % 2;

//     if (sum <= 10) {
//       return i; // цикл крутится пока не выйдет тут
//     }

//     i++;
//   }
// }

// console.log(func());
// function func() {
//   let sum = 0;
//   while (sum <= 10) {
//     sum = sum / 2;
//   }
//   return sum;
// }
// function divideUntilLessThan10(num) {
//   let iterations = 0;
//   while (num >= 10) {
//     num = num / 2;
//     iterations++;
//   }
//   return iterations;
// }
// function fung(arr) {
//   let sum = 0;
//   let i = 1;
//   while (true) {
//     sum += i;

//     if (sum >= 1000) {
//       return i;
//     }
//     i++;
//   }
// }
// console.log(fung());
// function fang() {
//   let sun = 1;
//   let k = 2;
//   while (true) {
//     sun = sun / k;
//     if (sun >= 10) {
//       return k;
//     }
//     k++;
//   }
// }
// console.log(fang());
function func(num) {
  let res;

  if (num >= 0) {
    res = Math.sqrt(num);
  } else {
    res = 0;
  }

  return res;
}

console.log(func(-9));
function fang(sam) {
  let ser;
  if (sam >= 0) {
    ser = Math.sqrt(sam);
  } else {
    ser = 0;
  }
  return ser;
}
console.log(fang(25));
function fungg(sum) {
  let sum1 = 0;
  while (sum >= 10) {
    sum = sum / 2;
    sum1++;
  }
  return sum1;
}
function fan(sum2, sum3) {
  if (sum2 > 0 && sum3 > 0) {
    return sum2 * sum3;
  } else {
    return sum2 - sum3;
  }
}
console.log(fan(-3, -4));
