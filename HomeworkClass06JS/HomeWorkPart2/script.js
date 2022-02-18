// HOMEWORK PART 2
console.log('-------------Homework Part 2-------------');

let num = [5, 14, 8, 23, 33];

let listNumber = document.getElementById('list');

let sNumber = document.getElementById('sumNumber');

let sAllNumber = document.getElementById('sumAll');

let sum = 0;

for(let number of num) {
    sum += number;
    listNumber.innerHTML += ` <li> Number: ${number}</li>`;
}
sNumber.innerHTML = `Sum of Numbers is : ${sum}`

sAllNumber.innerHTML = `(${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} = ${sum})`;


