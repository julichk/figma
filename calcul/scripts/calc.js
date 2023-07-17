const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plussBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiBtn = document.getElementById("multi");
const divisBtn = document.getElementById("divis");
let action = "+";

plussBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
multiBtn.onclick = function () {
  action = "*";
};
divisBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  }else if (actionSymbol == "-") {
    return num1 - num2;
  }else if (actionSymbol == "*") {
    return num1 * num2;
  }else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computNumbersWithAction(input1, input2, action);
  printResult(result);
};
