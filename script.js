const calculatorDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const equalsToBtn = document.querySelector("#equals-to");

let displayValue = "";

buttons.forEach((button) => {
  button.onclick = () => {
    handleButtonAction(button);
  };
});
// handling button press actions
const handleButtonAction = (button) => {
  if (button.innerText === "=") {
    displayValue = eval(displayValue);
    showOutput();
    return;
  }

  if (button.innerText === "C") {
    displayValue = "";
    showOutput();
    return;
  }

  if (["+", "-", "*", "/"].includes(button.innerText)) {
    const lastEntry = calculatorDisplay.innerText.slice(-1);
    if (["+", "-", "*", "/"].includes(lastEntry)) {
      return;
    }
  }

  if (displayValue === "") {
    if (["/", "*"].includes(button.innerText)) {
      return;
    }
  }

  if (calculatorDisplay.innerText === "Infinity") {
    displayValue = "";
    showOutput();
  }

  displayValue += button.innerText;
  showOutput();
};

const showOutput = () => {
  calculatorDisplay.innerText = displayValue || "0.00";
};
