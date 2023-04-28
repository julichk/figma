const money = prompt("Привіт,  скільки вкладаєш?", "число");
const rate = 5;
const time = 2;

const A = money * Math.pow(1 + rate / 100, time);

const CI = A - money;

alert("За рік тобі капне: " + CI);

console.log(2 && 0 && 3); //0
console.log(2 || 0 || 3); //2
console.log((2 && 0) || 3); //3
