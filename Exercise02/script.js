// Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.

console.log("------ Exercise 02-------");

let array = Array.from({length: 100}, (_, i) => i + 1)

console.log(array);


function divisableSeven(array7){
	let divisablebyseven = []; 

	for (let i = 0; i < array7.length; i++ ){
		if(array7[i] % 7 === 0){
			divisablebyseven.push(array7[i]);
		}
	}
	return divisablebyseven;
}
console.log(divisableSeven(array));

function divisableThree(array3){ 
	let divisablebythree = [];

	for (let i = 0; i < array3.length; i++ ){
		if(array3[i] % 3 === 0){
			divisablebythree.push(array3[i]);
		}
	}
	return divisablebythree;
}
console.log(divisableThree(array));








