//*****Relational Operators */

// Greater Than: >
// Less Than <
// Less Than or Equal <=
// Greater Than or Equal >=

//***** Logical Operators
// AND: &&
// OR: ||

//***** Logical Operators */
// Equal: ==
// Not Equal: !=

//***** Strict */
// Equal: +++
// Not Equal: !==

//*Let age = 25;
//*If (age >= 21) {
//*    console.log("You make buy alcohol.");
//*}
//*else {
//*   console.log(No!);
//*}

var name1 = "Eva"
var name2 = "Amanda"
var n1 = (name1.length);
var n2 = (name2.length);
var n3 = n1 - n2;
var n4 = n2 - n1;

console.log(n1);
console.log(n2);
if (n3 >= n4) {
    console.log(name1+" is longer.")
    console.log("It is '+ n3 +' characters longer.")
} else {     
    console.log(name2+" is longer.")
    console.log('It is '+ n4 +' characters longer.')
}