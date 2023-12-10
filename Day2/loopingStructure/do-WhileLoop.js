/*In this loop, the condition comes after the body of the loop. Thats why loop body must be executed at least once.
Syntax:
    do{
        statement 1;
        statement 2;
         .
         .
        statement N;
         
    }while(condition);
    */
/*  Practice Questions

/*Q-1:
write a js program that display counting from 10 to 1 using while loop
solution:*/
console.log("back Counting 10 to 1:");
var c = 10;
do {
  console.log(c);
  c--;
} while (c >= 1);
/* -----end-----*/
/*Q-2:
Write a js program that gets two numbers from the user and display the result of first number raise to the 
power of second number using do-while loop.
Solution:*/
console.log("if second number is power of first then:");
let n1 = prompt("Enter first number:");
let n2 = prompt("Enter second number:");
var c = 1;
let r = 1;
do {
  r = r * n1;
  c = c + 1;
} while (c <= n2);
// console.log("Result is " + r);
/*------end-------*/
/*Q-3:
write a js program that inputs a number and checks weather it is a palindrome or not. A palindrome is a number
that read the same backwards as forwards such as 62526 and 4994.
solution:*/
let num = prompt("Enter a positive number");
let n = num;
let rev = 0;
let digit;

while (num > 0) {
  digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(`The reverse of the number is: ${rev}`);

if (n == rev) {
  console.log("The number is a palindrome");
} else {
  console.log("The number is not a palindrome");
}

/*-------end-------*/
/* Q-4:
write a js program that gets starting and ending point from the user and display all odd numbers in the given range .
solution:*/
console.log("Odd numbers are as follows: ");
let start = prompt("enter starting number ");
let end = prompt("enter ending number ");
let s = start;
do {
  if (s % 2 != 0) {
    console.log(s);
  }
  s++;
} while (s <= end);
/*-------end------*/
/*Q-5:
write a program that display sum of the following series using do while loop.
1 + 1/4 + 1/8 + ... + 1/100.
solution:*/
let m = 1;
let ser = 4;
do {
  m = m + 1 / ser;
  ser = ser + 4;
} while (ser <= 100);
console.log("Result is: " + m);
/*-------end-----*/
