// // EXTRA WINTER HOMEWORK

// // * Note: Link this script to your html document and enter your solutions here.
// // ** Note: Take all parameters from user input using prompt


// // ----------- Task 01 --------------
// // Write a JS function that will decide if a number entered by user is even or odd
// // Example: isOddOrEven(3)
// // Output 'Number 3 is odd number.'

console.log('------------Task 01------------');

let number = prompt('Your Number is even or odd');

if(number % 2 == 0){
    console.log(`Number ` + number + ' is odd number');
}
else{
    console.log(`Number ` + number + ` is even number`);
}

// // // ------------ Task 02 --------------
// // // Write a function that takes an integer minutes and converts it to seconds.
// // // Example: convert(5)
// // // output 300

console.log('------------Task 02------------'); 

let input = prompt('Write number of minutes and you see result in seconds');

console.log(`Result is: ` + input * 60 + ` seconds` );


// // // ------------ Task 03 -------------
// // // You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// // // Example: points(38, 8) 
// // // output 100

console.log('------------Task 03------------'); 

let input2 = prompt(`Enter 2 pointers`);

let input3 = prompt(`Enter 3 pointers `);

console.log(`Final score: ` + ((input2 * 2) + (input3 * 3)) + ` Points` );



// // // ------------ Task 04 ------------ 
// // // In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// // // chickens = 2 legs
// // // cows = 4 legs
// // // pigs = 4 legs
// // // Example: howManyLegs(5, 2, 8)
// // // output: 50

console.log('------------Task 04------------'); 

let chickens = prompt(`Enter amount of chickens: `);

let cows = prompt(`Enter amount of cows: `);

let pigs = prompt(`Enter amount of pigs: `);

console.log(`Total Legs of the animals: ` + ((chickens * 2) + (cows * 4) + (pigs * 4)) + ` Legs` );


// // // ------------ Task 05 ------------
// // // Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// // // Example: calculate(3, 7, '*')
// // // output: 21

console.log('------------Task 05------------'); 


let operator = prompt(`Enter some of this operator: +, -, *, / and %`);

let number1 = parseFloat(prompt(`Enter first number: `));

let number2 = parseFloat(prompt(`Enter second number`));

switch(operator){
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    case '%':
        result = number1 % number2;
        console.log(`${number1} % ${number2} = ${result}`);
        break;
    default:
        console.log(`Invalid operator`);
        break;
}   

// // ------------- Task 06 -----------
// // Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// // Example: comp("ABC", "DE")
// // output false

console.log('------------Task 06------------');

let string1 = prompt(`Enter first string`);

let string2 = prompt(`Enter second string`);

if (string1.length == string2.length){
    console.log(`True`);
}
else {
    console.log(`False`);
}


// // ------------- Task 07 -----------
// //A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. So you need two parameters, one for user age and other for the bartender being on break or not.
// // Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// // Example: shouldServeDrinks(17, true) output false
// // Example: shouldServeDrinks(19, false) output true
// // Example: shouldServeDrinks(30, true) output false

console.log('------------Task 07------------');

function shouldServeDrinks (age, bartender) {
	if((age > 18) && (bartender == 'false')) {
		return "true";
	}

	else {
		return "false";
	}
	
}

let age = prompt('Age: ');

let bartender = prompt('Bartender on a break: ');
console.log(shouldServeDrinks(age, bartender));



// // ------------- Task 08 -----------
// // Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// // Example: moodToday("happy") output "Today, I am feeling happy"
// // Example: moodToday() output "Today, I am feeling neutral"

console.log('------------Task 08------------'); 

function moodToday (mood){
    if(mood == 'happy'){
    console.log(`Today, I am feeling happy`);
    }

    else if(mood == 'sad'){
    return `Today, I am feeling sad`;
    }

    else if(mood == `nervous`){
    return `Today, I am feeling nervous`;
    }
    
    else if(mood == 'sleepy'){
    return `Today, I am feeling sleepy`;
    }
    
    else{
    return `Today, I am feeling neutral`;
    }
}

let mood = prompt(`How you feel today: happy, sad, nevrous, sleepy`);
console.log(moodToday(mood));


// // ------------ Task 09 -----------
// // Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// // Total number of slices.
// // Number of recipients.
// // How many slices each person gets.

// //The function will be in this form: equalSlices(total slices, no. recipients, slices each)
// // Example: equalSlices(11, 5, 2) output true (5 people x 2 slices each = 10 slices < 11 slices)
// // Example: equalSlices(11, 5, 3) output false (5 people x 3 slices each = 15 slices > 11 slices)

console.log('------------Task 09------------'); 

function equalsSlices(totalSlices, nRecipients, slicesEach){
    if(nRecipients * slicesEach < totalSlices){
        return `True`;
    }
    else {
        return `False`;
    }
}

let totalSlices = prompt(`Enter Total slices of the pie: `);

let nRecipients = prompt(`Enter number of recipiens: `);

let slicesEach = prompt(`Enter slices each: `);
console.log(equalsSlices(totalSlices, nRecipients, slicesEach));

// ---------- Task 10 ----------
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Example: totalCups(6) output 7
// Example: totalCups(12) output 14
// Example: totalCups(213) output 248

console.log('------------Task 10------------'); 

function totalCups(nCups){
    return parseInt(nCups) + parseInt((nCups / 6)) + ' coffies'; 
}

let nCups = prompt(`Write how many coffees you want? - for every 6 coffees you get one for free `);
console.log(totalCups(nCups));
