console.log('----------HOMEWORK 1 ----------');

let num1 = parseInt(prompt('Enter first number'));
let num2 = parseInt(prompt('Enter second number'));

if(num1 > num2){
    console.log(`${num1} is greather than ${num2}`);
} 
else if(num1 < num2){
    console.log(`${num1} is less than ${num2}`);
}
else{
    console.log('both number are equal');
}