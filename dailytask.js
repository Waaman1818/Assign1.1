"Create 3 variables using var, let, const keywords and log the result in the console."
var name = "Sai";
console.log(name);

let age=25;
console.log(age);

const country = India
console.log(const);

2. Variable Names
"Which of the following variable names are valid in JavaScript? Explain why."
"total-amount" -- Hyphen is not allowed in javascript because it treats it as a minus Symbol
"2ndPlace" --  Place2 is allowed but 2nd place is not allowed in javascript
"var" -- Var is a keyword in javascript, meaning it cannot be used as a variable Name 

"$discount"  "myVariable"  "_userID" --- "These are valid variables that are often used.

3.○ Declare variables of different data types: string, number, boolean, undefined, and null.
○ Print each variable and its type using console.log and the typeof operator

String: let x = "Sai";
console.log(typeof(x)); --- String comes as an output

Number: let x = 10;
console.log(typeof(x)); --- Number comes as an output

Boolean: let X = true;
console.log(typeof(x)); --- Boolean comes as an output

Undefined: let x;
console.log(typeof(x)); --- Undefined comes as an output

null let X = null;
console.log(typeof(x)); --- Null comes as an output

4.What is the data type of each value? Write them down:
"42" --- String
42 --- Number
true --- Boolean
undefined --- Undefined
["apple", "banana"] --- Array
null --- Null

5.Use typeof to find the data type of:
- "Hello World" --- console.log(typeof()); Output - String
- 42 --- console.log(typeof()); Output - Number
- true --- console.log(typeof()); Output - Boolean
- [1, 2, 3] --- console.log(typeof()); Outpuit - array
- undefined --- console.log(typeof()); Output - undefined


6.Create a variable with your first name and another with your last name. 
How can you combine them to create your full name with a space in between?

let firstname = Waaman;
let lastname = Brundavan;
let fullname = firstname +""+ lastnamel;
console.log(fullname); gives you Waaman Brundavan

7. Simple Math
Create a variable named marks = 35 ------ let marks = 35;
Add 2 to it --- marks +=2; gives you 37
Subtract 5 from it --- marks -=5; gives you 32
Multiply it by 2 --- marks *=2; gives you 64
Divide it by 2 --- marks /=2; gives you 32


8.Write code to display "Hello, JavaScript!" in the console in three different ways.
1. console.log("Hello, Javascript");
2. alert("Hello, Javascript");
3. prompt("Hello, Javascript");

9.Write a single-line comment and a multi-line comment about what you've learned in JavaScript so far.
Single-Line comment: Basic Fundamentals
Multi-Line Comment: Datatypes, Arthmetic operators, Comparison operators

10.10. Assignment Operators
Predict the final value of variable num after these operations:
let num = 10;
num += 5; ---  2
num *= 2; --- 20
num -= 7; --- 3
num /= 3; --- 3
num %= 4; --- 2


11.What will the values of x, y, p, and q be after this code runs?
let x = 5;
let y = x++;
let p = 5;
let q = ++p;

x=6
y=5
p=6
q=6

12.Use comparison operators (==, ===, !=, !==, >, <, >=, <=) to compare two variables of the same and different data types.

let a = 10;       
let b = "10";    


console.log(a == b);   true( checks only )
console.log(a === b);  false (=== checks value and type)


console.log(a != b);   false (!= checks only value, and they are equal)
console.log(a !== b);  true  (!== checks value and type, which are different)


console.log(a > 5);    true  (10 is greater than 5)
console.log(a < 5);    false (10 is not less than 5)


console.log(a >= 10);  true  (10 is equal to 10)
console.log(a <= 10);  true  (10 is equal to 10)
console.log(a <= 9);   false (10 is not less than or equal to 9)


