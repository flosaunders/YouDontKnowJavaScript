var TAX = 0.20;
const accessory = 20.00;
const phone = 99.99;
const spendingThreshold = 250;
var amount = 0;

var bankBalance = prompt("How much money do you have in your bank?");

while (bankBalance > phone) {		//if you can afford a phone
	amount = amount + phone;		//then buy a phone
	if (amount < spendingThreshold) {		//if you haven't gone over your mental spending threshold
		amount = amount + accessory;		//then buy an accessory
    }
    else {
    	break;
    }
}

function calculateTax(amount) {			//this calculates how much after tax
	amount = amount + (amount * TAX);
}

function formatAmount() {
	return "£" + amount.toFixed( 2 ); // rounds amount to 2 decimal places
	
}

if (amount <= bankBalance) {
	console.log( "You can afford it");		//if you can afford it the
}

	amount = formatAmount();
	console.log(amount);
