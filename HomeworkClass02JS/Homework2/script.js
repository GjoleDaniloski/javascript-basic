console.log('----------HOMEWORK 2 ----------');

let quantity = parseInt(prompt('Enter quantity'));
let animal = prompt('Enter animal');

if(quantity > 1){
    console.log(`${`${quantity} ${animal}`}s`);
}
else{
    console.log(`${quantity + animal}`);
}