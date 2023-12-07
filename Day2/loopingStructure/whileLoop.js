/* "A typeof control structure that repeat a statement or set of statements is known as looping structure"
Practice Questions
Q-1:
Write a js program that display "pakistan" for five times using while loop
Solution:*/
let n = 1;
while (n <= 5) {
  console.log("Pakistan");
  n++;
}
/* -----end-----*/
console.log("counting 1 to 10:");
/*Q-2:
write a js program that display counting from 1 to '10' using while loop
solution:*/
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}
/* -----end-----*/
console.log("back Counting 10 to 1:");
/*Q-3:
write a js program that display counting from 10 to 1 using while loop
solution:*/
let c = 10;
while (c >= 1) {
  console.log(c);
  c--;
}
/* -----end-----*/
console.log("N natural numbers: ");
/*Q-4:
write a js program to display first n natural numbers
solution:*/
let num1 = prompt("Enter a natural number:");
let c1 = 1;
while (c1 <= num1) {
  console.log(c1);
  c1++;
}
/* -----end-----*/
console.log("5 numbers and their sum:");
/* Q-5:
write a js program that display first five numbers and their sum using while loop.
solution:*/
let n1 = 1;
let sum = null;
while (n1 <= 5) {
  console.log(n1);
  sum += n1;
  n1++;
}
console.log(`Sum of first five numbers is: ${sum}`);
/* -----end-----*/
console.log("first five numbers and their square:");
/*Q-6:
display first five numbers with their squares using while loop.
solution:*/
let nm = 1;
while (nm <= 5) {
  console.log(`${nm}    ${nm * nm}`);
  nm++;
}
/* -----end-----*/
/*Q-7:
write a program that inputs a number and display a table of that number using while loop.
solution:*/
let table = prompt("enter a number for printing it table");
let t = 1;
console.log(`Table of ${table} is follows below:`);
while (t <= 10) {
  console.log(table * t);
  t++;
}
/* -----end-----*/
console.log("Sum of number digits:");
/*Q-8:
input an integer and display the sum of its digits. eg, if user enter 135 the program should display 9.
solution:*/
let x = prompt("Enter a number");
let s = 0;
let a = x;

while (x != 0) {
  let rem = x % 10;
  if (rem == 0) {
    s = s + x;
  } else {
    s = s + rem;
  }
  x = Math.floor(x / 10); // Use integer division to remove the last digit
}
console.log(`The sum of digits ${a} = ${s}`);
/*------end-----*/
console.log("Factorial of n:");
/*Q-9:
Input a number from the user and display its factorial using while loop.
solution:*/
let v = 1;
let f = 1;
let fact = prompt("enter a number to print it factorial");
while (v <= fact) {
  f *= v; //f=f*v
  v++;
}
console.log(`factorial of ${fact} is  ${f}`);
/* -----end-----*/
console.log("sum of series:");
/*Q-10:
Display sum of the following series:
1+ 1/2 + 1/4 + 1/6 +....+ 1/100;
solution:*/
let ser = 2;
let r = 1;
while (ser <= 100) {
  r = r + 1 / ser;
  ser = ser + 2;
}
console.log(`Result is : ${r}`);
/* -----end-----*/
console.log("sum of odd and even numbers:");
/*Q-11:
write a js program that inputs a positive number it then display the sum of all odd and even numbers
from 1 to the number entered by the user.
solution:*/
let numb = prompt("Enter any number");
let oddSum = 0;
let evenSum = 0;

while (numb > 0) {
  if (numb % 2 === 0) {
    evenSum += parseInt(numb);
  } else {
    oddSum += parseInt(numb);
  }
  numb--;
}

console.log(`Sum of even digits is: ${evenSum}`);
console.log(`Sum of odd digits is: ${oddSum}`);

/* -----end-----*/
console.log("To check Armstrong number:");
/*Q-12:
input a number and checks weather it is an 'Armstrong' number. eg 371 is an armstrong because 3^3+ 7^3+ 1^3=371
solution:*/
let armstrong = prompt("Enter a number ");
let copy = armstrong;
let count = 0;
while (copy != 0) {
  var rem = copy % 10;
  count += rem * rem * rem;
  copy = copy / 10;
}
if (count == armstrong) {
  console.log(`${armstrong} is Armstrong number.`);
} else {
  console.log(`${armstrong} is not an Armstrong number`);
}
/* -----end-----*/
console.log("Even numbers in given range:");
/*Q-13:
Write a js program that inputs starting and ending number from the user and display all even numbers in the given range.
solution:*/
let start = prompt("enter a starting number");
let end = prompt("enter an ending number");
while (n <= end) {
  if (n % 2 == 0) {
    console.log(n);
  }
  n++;
}
/*------end-------*/
console.log("numbers until user not enter '-1':");
/*Q-14:
write a js program that uses a while loop to enter number from the user and then display the loop is terminated when the user enter -1.
solution:*/
var no = 1;
while (no != -1) {
  var no = prompt("Enter a number");
  console.log(`You entered ${no}`);
}
console.log("End of program");
/*--------end---------*/
console.log("n Fibonacci terms:"); //n is the number that will be user enter
/*Q-15:
write a js program that inputs a number by the user and display 'n' fibonacci terms. 
Hint: Fibonacci sequence, sum of two successive terms gives the third term.
solution:*/
let fibonacci = prompt("How many fibonacci terms required");
let first = 0;
let second = 1;
console.log("Fibonacci terms are:");
console.log(`${first}`);
console.log(`${second}`);
let countTerms = 2;
while (countTerms < fibonacci) {
  let next = first + second;
  console.log(next);
  countTerms++;
  first = second;
  second = next;
}
/*------end------*/
console.log("To check 'n' is  a fibonacci number or not:");
/*Q-16:
write a js program that inputs a number and checks if it is a Fibonacci number or not.
Solution:*/
let numA = prompt("enter any number to check if it is a fibonacci ");
if (numA == 0 || numA == 1) {
  console.log(`${numA} is a Fibonacci number.`);
} else {
  let a = 0;
  let b = 1;
  let next1 = a + b;
  while (next1 < numA) {
    a = b;
    b = next1;
    next1 = a + b;
  }
  if (next1 == numA) {
    console.log(`${numA} is a fibonacci number.`);
  } else {
    console.log(`${numA} is not a fibonacci number`);
  }
}
/*-------end-------*/
console.log("Guess favorite movie:");
/*Q-17:
write a js activity to guess my favorite movie .
 solution:*/
let favMovie = "avatar";
let guess = prompt("guess my favorite movie");
while (guess != favMovie) {
  if (guess == "quit") {
    console.log("you quit the game");
    break;
  }
  guess = prompt("Wrong guess. please try again");
}
if (guess == favMovie) {
  console.log("Congrats! you win");
}
/*------end------*/
