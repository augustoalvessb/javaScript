const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

console.log(operationButtons);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }



  formatDisplayNumber(number) {
    const stringNumber = number.toString();
    
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];

    let integerDisplay;
    
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if(decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  calculate() {
    let result;

    const previousOperandFloat = parseFloat(this.previousOperand);
    const currentOperandFloat = parseFloat(this.currentOperand);

    if(isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return;

    switch (this.operantion) {
      case '+':
        result = previousOperandFloat + currentOperandFloat;
        break;
      case '-':
        result = previousOperandFloat - currentOperandFloat;
        break;
      case '÷':
        result = previousOperandFloat / currentOperandFloat;
        break;
      case 'x':
        result = previousOperandFloat * currentOperandFloat;
        break;
      default:
        return;
    }

    this.currentOperand = result;
    this.operantion = undefined;
    this.previousOperand = "";
  }

  chooseOperation(operantion) {

    if (this.currentOperand == '') return;

    if (this.previousOperand != '') {
      this.calculate()
    }

    this.operantion = operantion;

    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  appendNumber(number) {
    if(this.currentOperand.includes('.') && number == '.') return;

    this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }
  clear() {
    this.currentOperand = ''; 
    this.previousOperand = '';
    this.operantion = undefined;
  }
  updateDisplay() {
    this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(this.previousOperand)} ${this.operantion || ""}`;
    this.currentOperandTextElement.innerText = this.formatDisplayNumber(this.currentOperand);
  }
};

const calculator = new Calculator(
  previousOperandTextElement, //número de cima
  currentOperandTextElement //número de baixo
);

for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
      calculator.appendNumber(numberButton.innerText);
      calculator.updateDisplay();
    });
}

for (const operationButton of operationButtons) {
  operationButton.addEventListener('click', () => {
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener('click', () => {
  calculator.calculate();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
})