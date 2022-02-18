// <-----------------HOMEWORK #1----------------->

console.log('-----------------HOMEWORK #1-----------------');


let argument = ['Filip', 'excited', 'play']; 

function tellStory() {
    return (`This is ` + argument[0] + `. ` + argument[0] + ` is a nice person.` + ` He is ` + argument[1] + `,` + ` because will ` + argument[2] + ` football all day.`);
    
}
console.log(tellStory());


// <-----------------HOMEWORK #2----------------->

console.log('-----------------HOMEWORK #2-----------------');


let number = [ 2, 5, 3, 11, 44 ];
i = 0;

let sum = number.reduce(function(a, b){
    return a + b;
});

console.log(`Sum of number is: ` + sum);


// <-----------------STUDENT EXERCISE - #1----------------->

console.log('-----------------STUDENT EXERCISE - #1-----------------');


let arrayNumber = [15, 2, 4, 44, 15, 4, 15, 5, 2];

function numberCount(number, array) {
    let occurences = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            occurences++;
        }
    }
    return occurences;
}
let input = parseInt(prompt("Enter a number:"));

console.log(`There are ${numberCount(input, arrayNumber)} occurences of ${input} in the array!`);


// <-----------------STUDENT EXERCISE - #2----------------->

console.log('-----------------STUDENT EXERCISE - #2-----------------');

let num = [ 6, 4, 15, 2, 4, 18, 7];

let type = 'even';

function filterOddEven(array, type){
        let result = [];
        if(type === "even"){
           for (let num of array) {
               if(num % 2 === 0){
                   result.push(num);
               }
           } 
           return result;
        } else if(type === "odd"){
            for (let num of array) {
                if(num % 2 !== 0){
                    result.push(num);
                }
            } 
            return result;
        } else {
            return null;
        }
    }
let input1 = parseInt(prompt("Write a number to see if it is even or odd:"));
console.log(filterOddEven(num, type));
console.log("The type was not correct. Please enter odd or even");


    
// <-----------------HOMEWORK LOOP #1----------------->

console.log('-----------------HOMEWORK LOOP #1-----------------');

let arrayString = [ 'Hello', 'there', 'students', 'of', 'SEDC', '!']; 

let emptyArray = [];

for( let i = 0; i < arrayString.length; i++){
    
    emptyArray = emptyArray + arrayString[i] + ' ';
}

console.log(emptyArray);



// console.log('-----------------HOMEWORK LOOP #1-----------------');

// let arrayString = [ 'Hello', 'there', 'students', 'of', 'SEDC', '!']; 

// let string = arrayString.join();

// console.log(arrayString.join(` `));




// <----------------HOMEWORK LOOP #2----------------->

console.log('-----------------HOMEWORK LOOP #2-----------------');

let listNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for( let i = 0; i <= listNumber.length; i++){
    if(listNumber[i] % 2 === 0){
        console.log(`Number: ` + listNumber[i] + '\n'+'\n' );
    }
    else{
        console.log(`Number: ` + listNumber[i] + ` ` );
    }

}

// <----------------HOMEWORK LOOP #3----------------->

console.log('-----------------HOMEWORK LOOP #3-----------------');

let minMaxArray = [ 3, 5, 6, 8, 11, 7, 18, 55];

function minMaxNumber(array){
    let min = Infinity;
    let max = -Infinity;

    for(let number of array){
        if(number > max){
            max = number;
        }
        if(number < min){
            min = number;
        }
        if(sum = min + max)
            min + max;
    }
    return `Max: ${max} ` + `Min: ${min}` + ` Sum: ${sum}`;
}
console.log(minMaxArray);
console.log(minMaxNumber(minMaxArray));


// <----------------HOMEWORK LOOP #3----------------->

console.log('-----------------HOMEWORK LOOP #4-----------------');

let firstNames = ['Gjorgje', 'Ivan', 'Leart', 'Sanja', 'Jana', 'Marko'];

let lastNames = ['Daniloski', 'Jamandilovski', 'Kamberi', 'Karakashova', 'Simjanovska', 'Djordjievski'];

function merge(array1, array2) {
    let firstLast = [];
    for (let i = 0; i < array1.length; i++){
        firstLast.push(`${i+1}. ${array1[i]} ${array2[i]}`);
    }
    return firstLast;
}
let mergeArray = merge(firstNames, lastNames);
console.log(mergeArray);