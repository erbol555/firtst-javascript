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
// if ((str2[0] = "a")) {
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

const dd = 0;
if (dd == 0) {
  console.log("(x = (b / 2) * a)");
} else if (dd >= 0) {
  if (dd > 0) {
    console.log((x1 = "9"), (x2 = "12"));
  } else if (dd < 0) {
    console.log("d = !");
  }
}
