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
    currentAnswer = '';
    num1 = null
    num2 = null
})

equals.addEventListener ("click", function(){
    solved = true;
    num2 = parseInt(display.value)
    console.log(previousOperator)
    console.log(num1)
    console.log(num2)
    console.log(solved)
    currentAnswer = display.value = operate(previousOperator, num1, num2)
})

//Number buttons
Array.from(numberButtons).forEach(button => button.addEventListener("click", function() {
    if (operators.includes(display.value) || solved == true){
        display.value = ''
        solved = false;
    }
    display.value += button.value
    equation += button.value
    console.log(equation)
 }))

 //Operator buttons
 Array.from(operatorButtons).forEach(button => button.addEventListener("click", function() {
     console.log("current answer: " + currentAnswer)

     if (currentAnswer) {
         num1 = null
         num2 = currentAnswer
         previousOperator = button.value
         display.value = currentAnswer
     }

    if (num1 == null){
        num1 = parseFloat(display.value)
        console.log("number 1 becomes: " + num1)
        previousOperator = button.value
        display.value = button.value
    } else {
        console.log(previousOperator)
        num2 = parseFloat(display.value)
        console.log("number 2 becomes: " + num2)
        currentAnswer = operate(previousOperator, num1, num2)
        display.value = currentAnswer
        num1 = currentAnswer
        console.log("number 1 is now: " + num1)
        console.log("Here")
        console.log(solved)
        console.log(currentAnswer)
    }
    equation += ' ' + button.value + ' '
 }))

function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return parseFloat(a * b).toFixed(4).replace(/(\.0+|0+)$/, '');
}

function divide (a, b) {
    if (b == 0) {
        return "I cannot"
    }
    return parseFloat(a / b).toFixed(4).replace(/(\.0+|0+)$/, '');;
}

function operate (operator, a, b) {
    solved = true
    if (operator == '+')
        return add(a,b)
    else if (operator == '-')
        return subtract(a,b)
    else if (operator == '*')
        return multiply(a,b)
    else if (operator == '/')
        return divide(a, b)
}
