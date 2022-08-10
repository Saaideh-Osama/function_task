/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(a1,a2,a3,a4){
  return `you will be a ${a1} in ${a2} , and married to ${a3} with ${a4} kids`

}
console.log(tellFortune("pilot","berlin","marie","3"))

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(x){
  return `your dog age is ${x*7} in dog years` }
 console.log(calculateDogAge(5))


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(z,y){
  return `you will need ${z*y*365} cups of tea to last you until the ripe old age of 100`
}
console.log(calculateSupply(100,45))

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(firstname){     return "hello "+ firstname 
  }
     console.log(greet("osama"))


5
// what is the error:
// function double(cat) {
//   return 2 * x;
// }
function double(x) {
  return 2 * x;
}
console.log(double(15))
function double(7) {
  return 2 * 7;
}

// function double('7') {
//   return 2 * 'x';
// }
// */
function double(x) {
  return 2 * x; }

console.log(double('13'))



6
// fix these functions:
// func double1(x {
//   return 2 * x ;
// }

function double1(x) {
  return 2 * x ;
}
console.log(double1(5))

// functiondouble2 x)
// return 2 * x;
// }
function double2 (x){
  return 2 * x;
  }


   console.log(double2(5))
// function (x) double3 {
//   return 2 * x;

 function double3(x) {
   return 2 * x; }
   console.log(double3(5))

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x){
    return (x**3)

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

console.log(cube(4))

function multiply(x,y){
 return (x*y)}

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(x) {
    if (x < 20) {
     window.alert(`come back after ${20-x} years to get one  `);
   } 
    else {
    window.alert(`yes you can`)
   }
 }
 console.log(canIGetADrivingLicense(8))

/*s
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(x,y){

  if (x.length==y.length) {
  window.alert(true);
} 
 else {
 window.alert(false)
}}
console.log (sameLength("pow","now"))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNumber(x,y){

  if (x > y) {
  window.alert(x);
} 
 else {
 window.alert(y)
}}
console.log (largerNumber(5,8))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNumber(x,y){

  if (x > y) {
  window.alert(y);
} 
 else {
 window.alert(x)
}}
console.log (smallerNumber(5,2))
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterLength(x, y, z, c, v) {
  if (
    x.length < y.length &&
    x.length < z.length &&
    x.length < v.length &&
    x.length < c.length
  ) {
    window.alert(x);
  } else if (
    y.length < x.length &&
    y.length < z.length &&
    y.length < v.length &&
    y.length < c.length
  ) {
    window.alert(y);
  } else if (
    z.length < x.length &&
    z.length < y.length &&
    z.length < v.length &&
    z.length < c.length
  ) {
    window.alert(z);
  } else if (
    c.length < x.length &&
    c.length < z.length &&
    c.length < v.length &&
    c.length < y.length
  ) {
    window.alert(c);
  } else {
    window.alert(v);
  }
}
console.log(shorterLength("firefighter","flawless","tree","crown","street"))
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerLength(x, y, z, c, v) {
  if (
    x.length > y.length &&
    x.length > z.length &&
    x.length > v.length &&
    x.length > c.length
  ) {
    window.alert(x);
  } else if (
    y.length > x.length &&
    y.length > z.length &&
    y.length > v.length &&
    y.length > c.length
  ) {
    window.alert(y);
  } else if (
    z.length > x.length &&
    z.length > y.length &&
    z.length > v.length &&
    z.length > c.length
  ) {
    window.alert(z);
  } else if (
    c.length > x.length &&
    c.length > z.length &&
    c.length > v.length &&
    c.length > y.length
  ) {
    window.alert(c);
}
else {window.alert(v);}}
console.log(longerLength("firefighter","flawless","tree","crown","streetfighting"))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x){
  if (x % 2 ==0) {
      window.alert(true)
  }
  else {window.alert(false)
  }
}
console.log(isEven(102))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(x){
  if (x % 2 ==0) {
      window.alert(false)
  }
  else {window.alert(true)
  }
}
console.log(isOdd(105))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x) {
  if (x < 0) {
      return -x }
      else { return x
  } }
  console.log(positive(-75))
  console.log(positive(105))

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstname,lastname){
      return firstname +" "+ lastname
  }
  console.log(fullName("osama","saaideh"))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1,n2,n3,n4,n5,n6){
  return (n1+n2+n3+n4+n5+n6)/6
}
console.log(average(2,4,6,4,6,7))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random()
}
console.log(randomNumber())
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(x,y){
  return Math.random()  * (x - y) + y
}
console.log(randomBetweenNumbers(5,9))


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversity(x) {
  if (x >= 95 && x <= 100) {
      return "A";
  } 
  else if(x >= 85 && x <= 94) {
      return "B";
  } 
  else if ( x>= 70 && x <= 84) {
      return "C";
  } 
  else if (x >= 50 && x <= 69) {
      return "D";
  } 
  else if (x >= 0 && x <= 49) {
      return "F";
  } 
  }
  console.log(scoreInUniversity(98))
/*
23
Write a function called counter
that will return a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
starter=0;
function counter(){
return starter++;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter())

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
  starter=0;
  console.log (" the counter reset");
}
resetCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());