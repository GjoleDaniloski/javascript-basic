  // 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts

console.log("------ Exercise 03-------");

let accountBalance = 10000; 

function getBalance() {
	alert(`Your current balance is: ${accountBalance}`);
	atm();
}

function makeDeposit() {
	let deposit = parseFloat(prompt('How much would you like to deposit?'));
	if (isNaN(deposit) || deposit === '') {
		alert('Error: please enter a number!');
		makeDeposit();
	} else {
		accountBalance += deposit;
		getBalance();
	}
}

function makeWithdrawal() {
	let withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
	if (isNaN(withdrawal) || withdrawal === '') {
		alert('Error: please enter a number!');
		makeWithdrawal();
	} else {
		accountBalance -= withdrawal;
		getBalance();
	}
}

function error() {
	alert('Error: accepted numbers are 1 through 4.');
	atm();
}

function exit() {
	let confirm_leave = confirm('You have selected exit.');
	if (confirm_leave) {
		window.close();
	} else {
		atm();
	}
}

function atm() {
	let choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); 
	if (choice === 1) {
		getBalance();
	} else if (choice === 2) {
		makeDeposit();
	} else if (choice === 3) {
		makeWithdrawal();
	} else if (choice === 4) {
		exit();
	} else {
		error();
	}
}

atm();
