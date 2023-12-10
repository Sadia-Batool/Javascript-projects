/*for loop
syntax:
for(initialization; condition; increment/decrement){
    statement 1;
    statement 2;
         .
         .
    statement N;
}
*/
/*practice programs
Q-1:
write a program that display counting from 1 to 5 using for loop.
solution:*/
console.log("counting from 1 to 5:");
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
/*-------end------*/
/*Q-2:
write a js program that display product of all odd numbers from 1 to 10 using for loop.
solution:*/
console.log("product of odd numbers from 1 to 10:");
let product = 1;
for (let c = 1; c <= 10; c = c + 2) {
  product *= c;
}
console.log("product is: " + product);
/*-------end------*/
/*Q-3:
write a js program that inputs table number and length of table and then display the table using for loop.
solution:*/
let table = prompt("enter number for table:");
let len = prompt("enter length of table:");
console.log(`Table of $`);
for (let t = 1; t <= len; t++) {
  console.log(`${table} * ${t} = ${table * t}`);
}
/*-------end------*/
/*Q-4:
write a js program that finds the sum of the squares of integers from 1 to n. when n is a positive value entered 
by the user (i.e.) 
solution:*/
console.log("sum of numbers:");
let sum = 0;
let n = prompt("enter a number:");
for (var i = 1; i <= n; i++) {
  sum = sum + i * i;
}
console.log("Sum is: " + sum);
/*-------end------*/
/*Q-5:
write a js program that input a number from the user and prints the lowest and highest digit in the number.
solution:*/
console.log("Highest and lowest digit of a number:");
let num = prompt("enter a number :");
let temp = num;
let high = num % 10;
let low = num % 10;
num = num / 10;
for (var i = num; i >= 1; i = i / 10) {
  let rem = i % 10;
  if (rem > high) {
    high = rem;
  }
  if (rem < low) {
    low = rem;
  }
}
console.log(`The highest digit of ${temp} is ${high}`);
console.log(`The lowest digit of ${temp} is ${low}`);
/*--------end-------*/
/*Q-6:
write a program to print the following series:
1  4  7  10 ... 40
solution:*/
console.log(" The Series is as follows: ");
let a = 1;
for (var i = 1; a <= 40; i++) {
  console.log(a);
  a = a + 3;
}
/*-------end------*/
/*Q-7:
write a program to print the following series:
1  -4  7  -10 .......-40.
solution:*/
console.log("The Series is as follows:");
let b = 1;
for (var i = 1; b <= 40; i++) {
  if (b % 2 == 0) {
    console.log(`-${b}`);
  } else {
    console.log(`${b}`);
  }
  b = b + 3;
}
/*-------end------*/
/*Q-8:
write a js program that input a number and checks weather it is a perfect number or not. 
("A perfect number is a number that is numerically equals to the sum of its divisors. for example,
6 is a perfect number because the divisors of 6 are 1,2,3 and 1+2+3=6 ")
solution:*/
console.log("To check if a number is perfect or not:");
let n1 = prompt("enter a number :");
let res = 0;
let mid = n1 / 2;
for (var i = 1; i <= mid; i++) {
  if (n1 % i == 0) {
    res = res + i;
  }
}
if (res == n1) {
  console.log(`Yes, ${n1} is a perfect number`);
} else {
  console.log(`No, ${n1} is not a perfect number`);
}
/*------end------*/
/*Q-9:
write a program that inputs an integer and prints if it is prime or Composite.
("A number is prime if it has factors 1 and itself, other it is a composite number")
solution:*/
console.log("To check if a number is prime or composite:");
let no1 = prompt("enter a number to check if it is prime or composite");
let p = 1;
for (let j = 2; j <= no1 / 2; j++) {
  if (no1 % j == 0) {
    p = 0;
    break;
  }
}
if (p == 1) {
  console.log(`${no1} is a prime number`);
} else {
  console.log(`${no1} is a composite number`);
}
/*--------end--------*/
