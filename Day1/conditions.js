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
//Write a js program that inputs two numbers and finds if second number is square first or not.
//Solution:
let x1 = prompt("Enter 1st number:");
let y1 = prompt("Enter 2st number:");
if (x1 * x1 == y1) {
  console.log(`${y1} is square of ${x1}`);
} else {
  console.log(`${y1} is not square of ${x1}`);
}
// //*-------end--------*//

//Program No: '15'
//Write a js program that inputs marks of three subjects. If the average of marks is more than 80, it display
// two message "You are above standard!" and "Admission granted!".
//Solution:
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
//*-------end--------*//

//*--------'if-else' statement-end---------*//

//* Multiple if-else-if Structure*//
//if-else-if statement can be used to choose one block of statement from many block of statements .it is used
// when there are many options and only one block of statement should be executed on the basis of condition .

//* Practice Questions *//
//   Q-1:
// Create a system to calculate popcorn prices based on the size customer asked for.
// if size is 'XL', price is Rs.250
// if size is 'L', price is Rs.200
// if size is 'M', price is Rs.150
// if size is 'S', price is Rs.100
//Solution:
let size = prompt("Enter size of popcorn! which you wanted to buy:");
if (size === "XL") {
  console.log(`Price of Extra Large popcorn is Rs.250`);
} else if (size === "L") {
  console.log(`Price of Large popcorn is Rs.200`);
} else if (size === "M") {
  console.log(`Price of Medium popcorn is Rs.150`);
} else if (size === "S") {
  console.log(`Price of Small popcorn is Rs.100`);
} else {
  console.log("wrong! choice, please try again");
}
//OUtput (let size= L, then output will be: 'Price of Large popcorn is Rs.200)

//   Q-2:
//Create a system to calculate "Grade" of students on their marks basis.
//  Test score      Grade
//   >= 90           "A"
//   80-89           "B"
//   70-79           "C"
//   60-69           "D"
//  Below 60         "F"
//Solution:

let score = prompt("Enter your test score:");
if (score >= 90) {
  console.log("Your grade is 'A'");
} else if (score >= 80) {
  console.log("Your grade is 'B'");
} else if (score >= 70) {
  console.log("Your grade is 'C'");
} else if (score >= 60) {
  console.log("Your grade is 'D'");
} else {
  console.log("Your grade is 'F'");
}
//  Output( let score= 75, then output will be: Your grade is 'C')

//    Q-3:
//create a system that calculates electricity bill. the rates of electricity per unit are as follows:
//if the units consumed are <=300, then the cost is Rs. 2 per unit
//if the units consumed are >300, and <=500, then the cost is Rs. 5 per unit
//if the units consumed exceed 500 then the cost is Rs. 7 per unit
//A line rent Rs.150 is also added to the the total bill and a surcharge of 5% extra if the bill exceed Rs. 2000.
//Calculate the total bill with all the conditions given above:
//Solution:

let units = prompt("Enter units consumed:");
let bill = null;
if (units > 500) {
  bill = units * 7;
} else if (units > 300) {
  bill = units * 5;
} else {
  bill = units * 2;
}
bill += 150;
if (bill > 2000) {
  bill = bill + bill * (5.0 / 100.0);
}
console.log(`Total bill = ${bill}`);

//   Q-4:
//Write a js program that input radius and user choice. it calculate 'Area of circle' if user enters 1 as choice.
//it calculates 'circumference' if the user enter '2' as choice.
//Solution:
let radius = 5;
let choice = prompt("Enter 1 for 'Area', and 2 for 'circumference'");
if (choice == 1) {
  //Formula area=pi(r^2) ,such as area=3.14 * radius * radius
  area = radius * radius * 3.14;
  console.log(`Area of circle: ${area}`);
} else if (choice == 2) {
  //Formula cir=2(3.14)r
  let circumference = 2 * 3.14 * radius;
  console.log(`Circumference = ${circumference}`);
} else {
  console.log("invalid choice! please enter 1 or 2:");
}

//   Q-5:
//Write a js program that input salary. if salary is 20,000 or more, it deducts 7% of salary.
//if salary is 10,000 or more but less than 20,000, it deducts 1000 from the salary.
//if salary is less than 10000, it deducts nothing.Finally display net salary.
//Solution:

let sal = prompt("enter your salary:");
let netSal = null;
if (sal > 20000) {
  netSal = sal - sal * (7.0 / 100);
} else if (sal >= 10000) {
  netSal = sal - 1000;
} else {
  netSal = sal;
}
console.log(`Your net salary is ${netSal}`);

//*--------'if-else-if' statement-end---------*//

//*  NESTED 'IF' Structure  *//
//Def ("an if statement within an if statement is called 'nested if' statement")
//  if(condition)  outer if
//      if(condition){  inner if
//         statements(s);
//      }
//      else{   inner else
//         statements(s);
//      }
//  else{  outer if else
//       statements(s);
//     }

// * Exercise practice Questions *//
//   Q-1:
//Write a js program that input three numbers and display smallest number using 'Nested if'.
//Solution:

let num1 = 23;
let num2 = 34;
let num3 = 31;
if (num1 < num2) {
  if (num1 < num3) {
    console.log(`${num1} is smallest number`);
  } else {
    console.log(`${num3} is smallest number`);
  }
} else if (num2 < num3) {
  console.log(`${num2} is smallest number`);
} else {
  console.log(`${num3} is smallest number`);
}
//  output will be: '23 is smallest number'

//   Q-2:
// Inputs three numbers and display weather all numbers are equal or not using 'Nested if'.
//Solution:
let nm1 = prompt("enter a number ");
let nm2 = prompt("enter a number ");
let nm3 = prompt("enter a number ");
if (nm1 == nm2) {
  if (nm1 == nm3) {
    console.log("All numbers are equal");
  } else {
    console.log("Numbers are different");
  }
} else {
  console.log("Numbers are different");
}

//* Compound conditions *//
//def ("a type of comparison in which more than one conditions are evaluated")
//*   Logical operators   *//
//Def( Logical operators are used to evaluate compound conditions)
// 1.AND operator(&&)   2.OR operator(||)    3.NOT operator(!)
//Examples:
//   Q-1:  'using && operator'
//Input three numbers and display the maximum number by using logical operators.
//Solution:
let noa = 5;
let nob = 4;
let noc = 8;
if (noa > nob && noa > noc) {
  console.log(` maximum number is ${noa} `);
} else if (nob > noa && nob > noc) {
  console.log(` maximum number is ${nob} `);
} else {
  console.log(` maximum number is ${noc} `);
}

//   Q-2:  'using || operator'
//Input a character and display weather it is a vowel or not by using logical operators.
//Solution:

let ch = prompt("enter an alphabet character:");
if (
  ch == "A" ||
  ch == "a" ||
  ch == "E" ||
  ch == "e" ||
  ch == "I" ||
  ch == "i" ||
  ch == "O" ||
  ch == "o" ||
  ch == "U" ||
  ch == "u"
) {
  console.log(`You entered a vowel: ${ch}`);
} else {
  console.log(`You did not enter a vowel: ${ch}`);
}

//   Q-3:  'using || operator'
//Write a program that allows the user to enter any character and determine weather it is a 'Capital letter',
// 'small letter', 'a digit number' or 'a special symbol'.
//Solution:

let chr = prompt("enter any character");
if (chr >= "A" && chr <= "Z") {
  console.log(`The character ${chr} is a capital letter`);
} else if (chr >= "a" && chr <= "z") {
  console.log(`The character ${chr} is a small letter`);
} else if (chr >= "0" && chr <= "9") {
  console.log(`The character ${chr} is a digit`);
} else {
  console.log(`The character ${chr} is a symbol.`);
}

//   Q-4:  'using ! operator'
//input a number and display weather it is even or odd using not operator.
//Solution:

let nam = 6;
if (!(nam % 2 == 0)) {
  console.log(`You entered odd number ${nam}`);
} else {
  console.log(`You entered even number ${nam}`);
}
// out will be (you entered even number 6)
