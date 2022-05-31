const display = document.getElementById("display")
const numberButtons = document.getElementsByClassName("number")
const operatorButtons = document.getElementsByClassName("operator")
const equals = document.getElementById("equalButton")
const clear = document.getElementById("clearButton")
let equation = ''
let operators = ['*','/','+','-']
let num1 = null
let num2 = null
let currentAnswer
let solved = false
let buttonHighlight = false
let previousOperator

clear.addEventListener ("click", function(){
    equation = '';
    display.value = '';
    num1 = null
    num2 = null
})

equals.addEventListener ("click", function(){
    num2 = parseInt(display.value)
    console.log(previousOperator)
    console.log(num1)
    console.log(num2)
    display.value = operate(previousOperator, num1, num2)
})

Array.from(numberButtons).forEach(button => button.addEventListener("click", function() {
    if (operators.includes(display.value) || solved == true){
        display.value = ''
        solved = false;
    }
    display.value += button.value
    equation += button.value
    console.log(equation)
 }))

 Array.from(operatorButtons).forEach(button => button.addEventListener("click", function() {
    if (num1 == null){
        num1 = parseInt(display.value)
        previousOperator = button.value
        display.value = button.value
    } else {
        console.log(previousOperator)
        num2 = parseInt(display.value)
        currentAnswer = operate(previousOperator, num1, num2)
        display.value = currentAnswer
        num1 = num2
    }
    equation += ' ' + button.value + ' '
 }))

function add (a, b) {
    console.log (a + b)
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    if (operator == '+')
        return add(a,b)
    else if (operator == '-')
        return subtract(a,b)
    else if (operator == '*')
        return multiply(a,b)
    else if (operator == '/')
        return divide(a,b)
    solved = true
}
