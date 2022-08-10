// function tellFortune(a1,a2,a3,a4){
//     return `you will be a ${a1} in ${a2} , and married to ${a3} with ${a4} kids`

// }
// console.log(tellFortune("pilot","berlin","marie","3"))

// function calculateDogAge(x){
//     return `your dog age is ${x*7} in dog years` }
//    console.log(calculateDogAge(5))

// function calculateSupply(z,y){
//     return `you will need ${z*y*365} cups of tea to last you until the ripe old age of 100`
// }
// console.log(calculateSupply(100,45))
// function cube(x){
//     return (x**3)
// }
// console.log(cube(4))
// function multiply(x,y){
//     return (x*y)
// }
// console.log(multiply(5,6))

// function fullName(firstname,lastname){
//     return firstname +" "+ lastname
// }
// console.log(fullName("osama","saaideh"))

// function average(n1,n2,n3,n4,n5,n6){
//     return (n1+n2+n3+n4+n5+n6)/6
// }
// console.log(average(2,4,6,4,6,7))

// function randomNumber(){
//     return Math.random()
// }
// console.log(randomNumber())

// function calculateDogAge(x){
//     if {(0 >x) return window.alert("dog age can't be minus")}
//    else {return window.alert(`your dog age is ${x*7}`)}
// }
// console.log{calculateDogAge(-3)}

// function calculateDogAge(x) {
//   if (x < 0) {
//     window.alert("dog age cant be minus !");
//   }
//    else {
//    window.alert(`your dog age is ${x*7} in dog years`)
//   }
// }
// console.log(calculateDogAge(8))

// function greet(firstname){     return "hello "+ firstname
//   }
//      console.log(greet("osama"))

// function double(x) {
//   return 2 * x;
// }
// console.log(double(15))

// function double(x) {
//    return 2 * x; }

// console.log(double('13'))
// function double1(x) {
//   return 2 * x ;
// }
// console.log(double1(5))
// function double2 (x){
// return 2 * x;
// }
// console.log(double2(5))

// function canIGetADrivingLicense(x) {
//     if (x < 20) {
//      window.alert(`come back after ${20-x} years to get one  `);
//    }
//     else {
//     window.alert(`yes you can`)
//    }
//  }
//  console.log(canIGetADrivingLicense(57))

//  function sameLength(x,y){

//     if (x.length==y.length) {
//     window.alert(true);
//   }
//    else {
//    window.alert(false)
//   }}
// console.log (sameLength("pow","now"))

// function largerNumber(x,y){

//     if (x > y) {
//     window.alert(y);
//   }
//    else {
//    window.alert(x)
//   }}
// console.log (largerNumber(5,2))

// function longerLength(x, y, z, c, v) {
//   if (
//     x.length > y.length &&
//     x.length > z.length &&
//     x.length > v.length &&
//     x.length > c.length
//   ) {
//     window.alert(x);
//   } else if (
//     y.length > x.length &&
//     y.length > z.length &&
//     y.length > v.length &&
//     y.length > c.length
//   ) {
//     window.alert(y);
//   } else if (
//     z.length > x.length &&
//     z.length > y.length &&
//     z.length > v.length &&
//     z.length > c.length
//   ) {
//     window.alert(z);
//   } else if (
//     c.length > x.length &&
//     c.length > z.length &&
//     c.length > v.length &&
//     c.length > y.length
//   ) {
//     window.alert(c);
// }
// else {window.alert(v);}}
// console.log(longerLength("firefighter","flawless","tree","crown","streetfighting"))


// function isOdd(x){
//     if (x % 2 ==0) {
//         window.alert(false)
//     }
//     else {window.alert(true)
//     }
// }
// console.log(isOdd(105))
// function positive(x) {
// if (x < 0) {
//     return -x }
//     else { return x
// } }
// console.log(positive(-75))
// console.log(positive(105))



// function randomBetweenNumbers(x,y){
//     return Math.random()  * (x - y) + y
// }
// console.log(randomBetweenNumbers(5,9))
starter=0;
function counter(){
return starter++;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter())

function resetCounter(){
    starter=0;
    console.log (" the counter reset");
  }
  resetCounter();
  
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());