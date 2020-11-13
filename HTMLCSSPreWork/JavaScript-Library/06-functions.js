//1        //2
function hello() {
    //3
    console.log("Hello World!");
}
hello(); // invokes the function hello.
hello();
hello();
hello();


function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364
function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1)); 
function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));
