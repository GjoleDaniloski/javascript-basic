console.log('PhoneBook');

let fName = document.getElementById('inputFName');

let lName = document.getElementById('inputLName');

let adressInput = document.getElementById('inputAdress');

let phoneInput = document.getElementById('inputPhone');

let addButton = document.getElementById('addOnList');

let table = document.getElementById('contact');


addButton.addEventListener('click', function(){
    let inputFirstName = fName.value;
    let inputLastName = lName.value;
    let inputAdress = adressInput.value;
    let inputPhone = phoneInput.value;

	let row = table.insertRow(0);
	let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
	cell1.innerHTML = inputFirstName;
	cell2.innerHTML = inputLastName;
	cell3.innerHTML = inputAdress;
	cell4.innerHTML = inputPhone;

    fName.value = '';
    lName.value = '';
    adressInput.value = '';
    phoneInput.value = '';

}, false);