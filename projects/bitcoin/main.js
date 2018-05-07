
/*
const btc = 3.5;
const btcUsdBought = 10000;
const btcUsdNow = 12000;

const invested = btc * btcUsdBought;
const current = btc * btcUsdNow;

const profit = current - invested;
// const growth = profit / invested * 100;
const growth = calcGrowth(invested, current);
const growth2 = calcGrowth(5000, 5500);
console.log(growth2);

function calcGrowth(pastVal, currentVal) {
	return (currentVal - pastVal) / pastVal * 100;
}
*/



const calcGrowth = (pastVal, currentVal) => (currentVal - pastVal) / pastVal * 100;

document.querySelector(".investment__btn").addEventListener("click", function() {
	const btcUsdBought = document.querySelector(".price__input--bought").value;
	const btcUsdNow = document.querySelector(".price__input--now").value;
	const btc = document.querySelector(".investment__btc").value;

	const invested = btc * btcUsdBought;
	const current = btc * btcUsdNow;
	const profit = current - invested;
	const growth = calcGrowth(invested, current);

	let message = "";
	if (profit > 0) {
		message = "Great! You made a profit of " + profit;
		document.querySelector(".result").style.color = "green";
	} else if (profit < 0) {
		message = "You're at a loss";
		document.querySelector(".result").style.color = "red";
	} else {
		message = "You're breaking even!";
		document.querySelector(".result").style.color = "blue";
	}

	document.querySelector(".result").textContent = message;

});














