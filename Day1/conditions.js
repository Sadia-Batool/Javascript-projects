//    IF-STATEMENT Programs
//  ("in if-statement case the condition is given in relational expression . if the condition is True
//   the statements or set of statements after if statement is executed . if the condition is false,
//   the statements or set of statements after if statement is not executed.")

//Program No: '1'
//Write a js program that inputs a marks of student so if marks are greater than or equal to 40
//display a message "Congratulation! You have passed".
//Solution:
let marks = prompt("Enter your marks:");
if (marks >= 40) {
  console.log("Congratulation! You have passed");
}
//*-------end--------*//

//Program No: '2'
//Write ajs program that inputs two numbers and find weather both are equal.
//Solution:
let a = prompt("Enter 1st number:");
let b = prompt("Enter 2st number:");
if (a == b) {
  console.log("Both numbers are equal");
}
// //*-------end--------*//

// //Program No: '3'
// //Write a js program that inputs two numbers and finds if second number is square first .
// //Solution:
let x = prompt("Enter 1st number:");
let y = prompt("Enter 2st number:");
if (x * x == y) {
  console.log(`${y} is square of ${x}`);
}
// //*-------end--------*//

//Program No: '4'
//Write a js program that inputs marks of three subjects. If the average of marks is more than 80, it display
//two message "You are above standard!" and "Admission granted!".
//Solution:
let sub1 = prompt("Enter marks of 1st subject");
let sub2 = prompt("Enter marks of 2nd subject");
let sub3 = prompt("Enter marks of 3rd subject");
let avg = 0;
let sum = 0;
sum = sub1 + sub2 + sub3;
avg = sum / 3;
if (avg > 80) {
  console.log("You are above standard!");
  console.log("Admission granted!");
}
// //*-------end--------*//

// //Program No: '5'
// //Write a js program that inputs three numbers and displays the maximum number .
// //Solution:
let n1 = prompt("Enter 1st number");
let n2 = prompt("Enter 2nd number");
let n3 = prompt("Enter 3rd number");
let maximum = n1;
if (n2 > maximum) {
  maximum = n2;
}
if (n3 > maximum) {
  maximum = n3;
}
console.log(`The maximum number is ${maximum}`);
//*--------end---------*//

//Program No: '6'
//Write a js program to input a number and determine weather it is a positive, negative or 0.
//Solution:
let num = prompt("Enter any number as you wish");
if (num > 0) {
  console.log(`${num} is positive number`);
}
if (num < 0) {
  console.log(`${num} is negative number`);
}
if (num == 0) {
  console.log(`The number that you entered is ${num}`);
}
//*-------end--------*//

// //Program No: '7'
// //Write a js program that inputs five different integers. It finds and display the largest and smallest integer.
// //Solution:
let no1 = prompt("Enter 1st integer");
let no2 = prompt("Enter 2nd integer");
let no3 = prompt("Enter 3rd integer");
let no4 = prompt("Enter 4rth integer");
let no5 = prompt("Enter 5th integer");
//  For minimum number
let min = no1;
if (no2 < min) min = no2;
if (no3 < min) min = no3;
if (no4 < min) min = no4;
if (no5 < min) min = no5;
console.log(`The smallest number is ${min} `);

//  For maximum number
let max = no1;
if (no2 > max) max = no2;
if (no3 > max) max = no3;
if (no4 > max) max = no4;
if (no5 > max) max = no5;
console.log(`The largest number is ${max} `);

//*--------if-statement-end---------*//

//  'IF-ELSE' Statement start  //
// Def(" IF-else is a two way decision making statement that depend on a given condition. It execute one block
// of statement when the condition is True and the other when it is False")
// In if-else statement two points remember that:
// 1= Both block of statement can never be executed
// 2= Both block of statement can never be skipped

// if(condition){
// statement;
// }
// else{
// statement;
// }

//Program No: '8'
//write a js program that input a number and finds weather it is even or odd.
//Solution:
let nom = prompt("Enter a number to checkout weather it is even or odd");
if (nom % 2 == 0) {
  console.log(`${nom} is even`);
} else {
  console.log(`${nom} is odd`);
}
//*-------end--------*//

//Program No:'9'
//write a js program that input a year and finds weather it is a leap year or not.
//Solution:
let year = prompt("enter a year  to checkout weather it is leap year or not");
if (year % 4 == 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
//*-------end--------*//

//Program No: '10'
//write a js program that inputs salary and grade. it add 50% bonus if the grade is greater than 15.
//and it add 25% bonus if the grade is 15 or less and then display the total salary.
//Solution:
let salary = prompt("Enter your salary ");
let grade = prompt("Enter your grade ");
let bonus = 0;
if (grade > 15) {
  bonus = salary * (50.0 / 100.0);
} else {
  bonus = salary * (25.0 / 100.0);
}
salary += bonus;
console.log(`Your total salary is Rs. ${salary}`);
//*-------end--------*//

//Program No: '11'
//Write a js program that input two integer and determine if the first integer is multiple of second integer.
//Solution:
let a1 = prompt("Enter first integer");
let b1 = prompt("enter second integer");
if (a1 % b1 == 0) {
  console.log(`${a1} is multiple of ${b1}`);
} else {
  console.log(`${a1} is not multiple of ${b1}`);
}
//*-------end--------*//

//Program No: '12'
//Write a js program that inputs a marks of student so if marks are greater than or equal to 40
//display a message "Congratulation! You have passed" otherwise you are Fail.
//Solution:
let mark = prompt("Enter your marks:");
if (mark >= 40) {
  console.log("Congratulation! You have passed");
} else {
  console.log("Sorry! You are fail");
}
//*-------end--------*//

//Program No: '13'
//Write a js program that inputs two numbers and find weather both are equal or not.
//Solution:
let f = prompt("Enter 1st number:");
let s = prompt("Enter 2st number:");
if (f == s) {
  console.log("Both numbers are equal");
} else {
  console.log(`${f} and ${s} are not equal numbers`);
}
//*-------end--------*//

//Program No: '14'
// //Write a js program that inputs two numbers and finds if second number is square first or not.
// //Solution:
let x1 = prompt("Enter 1st number:");
let y1 = prompt("Enter 2st number:");
if (x1 * x1 == y1) {
  console.log(`${y1} is square of ${x1}`);
} else {
  console.log(`${y1} is not square of ${x1}`);
}
// //*-------end--------*//

//Program No: '15'
// //Write a js program that inputs marks of three subjects. If the average of marks is more than 80, it display
// // two message "You are above standard!" and "Admission granted!".
// //Solution:
let s1 = prompt("Enter marks of 1st subject");
let s2 = prompt("Enter marks of 2nd subject");
let s3 = prompt("Enter marks of 3rd subject");
let Avg = 0;
let som = 0;
som = s1 + s2 + s3;
Avg = som / 3;
if (Avg > 80) {
  console.log("You are above standard!");
  console.log("Admission granted!");
} else {
  console.log("Sorry! Admission is not granted!");
}
// //*-------end--------*//

//*--------'if-else' statement-end---------*//
