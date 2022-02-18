//------------- Student Exercise - #3 -------------

console.log(`---------Student Exercise - #3---------`)

let currentYear = new Date().getFullYear(); 

function calculateAge(birthYear, currentYear){
    return (currentYear - birthYear);
}

let birthYear = prompt("Do you want to know how old are you - Just write your birth year");

console.log('You have: ' + calculateAge(birthYear, currentYear) + ' years');

//------------- Homework Part 1 -------------

console.log(`---------Homework Part 1---------`)

function chineseZodiak(year){
    if(year - 4 % 12 === 0){
        return 'In Chinese Zodiac you are: Rat'
    }
    else if((year - 4) % 12 === 1){
        return 'In Chinese Zodiac you are: Ox'
    }
    else if((year - 4) % 12 === 2){
        return 'In Chinese Zodiac you are: Tiger'
    }
    else if((year - 4) % 12 === 3){
        return 'In Chinese Zodiac you are: Rabbit'
    }
    else if((year - 4) % 12 === 4){
        return 'In Chinese Zodiac you are: Dragon'
    }
    else if((year - 4) % 12 === 5){
        return 'In Chinese Zodiac you are: Snake'
    }
    else if((year - 4) % 12 === 6){
        return 'In Chinese Zodiac you are: Horse'
    }
    else if((year - 4) % 12 === 7){
        return 'In Chinese Zodiac you are: Goat'
    }
    else if((year - 4) % 12 === 8){
        return 'In Chinese Zodiac you are: Monkey'
    }
    else if((year - 4) % 12 === 9){
        return 'In Chinese Zodiac you are: Rooster'
    }
    else if((year - 4) % 12 === 10){
        return 'In Chinese Zodiac you are: Dog'
    }
    else if((year - 4) % 12 === 11){
        return 'In Chinese Zodiac you are: Pig'
    }
}

let year = prompt("Write Your years in chinese Zodiak");
console.log(chineseZodiak(year));

//------------- Homework Part 2 -------------

console.log(`---------Homework Part 2---------`)

let unknownVar;

function dataType(value){
    return typeof (value);
}

console.log(dataType({name: 'Gjorgje'}));
console.log(dataType(true));
console.log(dataType(10));
console.log(dataType('Sedc'));
console.log(dataType(unknownVar));


//------------- Homework Part 3 -------------

console.log(`---------Homework Part 3---------`)

function calculateDogAge(age) {
    return dogYears = 7 * age;
}
let age = prompt('Do you know how long dogs live compared to humans? - Example write: 1 and you see result');
console.log('Your dog is: ' + calculateDogAge(age) + ' years old in dog years!');


//------------- Homework Part 4 -------------

console.log(`---------Homework Part 4---------`)

function atmCash(amount){
    let balance = 5000;
    if(amount > balance){
        return 'Not enought money on your account';
    }
    else {
        return 'You withdrawn: ' + amount + ' and you have left ' + (balance - parseInt(amount));
    }
}
let amount = prompt('Enter amount for withdrawal: Option: 2000 mkd, 3000mkd, 5000mkd, 10000mkd ');
console.log(atmCash(amount));


