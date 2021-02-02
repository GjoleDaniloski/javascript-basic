//Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.

console.log("------ Exercise 01-------");


let numInput = document.getElementById('numInput');
let btnSave = document.getElementById('btnSave');
let numOutput = document.getElementById('numOutput'); 
    
btnSave.addEventListener('click', function(){
	
    let numInputVal = numInput.value;
	let digits = numInputVal.toString();
	let result = [digits[0]];
	  
	for(let i=1; i<digits.length; i++)	
	{
		if((digits[i-1]%2 == 0)&&(digits[i]%2 == 0))
		{
			result.push('-', digits[i]);
		}
	else
		{
			result.push(digits[i]);
		}
	}
	  
    numOutput.innerHTML = result.join('');
    numInput.value = "";

}, false);
