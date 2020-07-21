// selecting class in html into dom
const calcScreen = document.querySelector('.calc-screen')
const number = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
const clearbtn = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
const percent = document.querySelector('.percent')

// Define Function
let prevNumber = ''
let calculation = ''
let currentNumber = '0'

const inputNumber = number => {
        if (currentNumber === '0') {
                currentNumber = number
        } else {
                currentNumber += number
        }
}

const inputOperator = operator => {
        if (calculation === '') {
                prevNumber = currentNumber
        }
        calculation = operator
        currentNumber = ''
}

const updateScreen = number => calcScreen.value = number

const calculate = () => {
        let result = ''
        switch (calculation) {
                case '+':
                        result = parseFloat(prevNumber) + parseFloat(currentNumber)
                        break
                case '-':
                        result = prevNumber - currentNumber
                        break
                case '*':
                        result = prevNumber * currentNumber
                        break
                case '/':
                        result = prevNumber / currentNumber
                        break
                default:
                        break
        }
        currentNumber = result
        calculation = ''
}

const clearAll = () => {
        prevNumber = ''
        calculation = ''
        currentNumber = '0'
}

const inputDecimal = dot => {
        if (currentNumber.includes('.')) {
                return
        }
        currentNumber += dot
}

const percentage = number => {
        number = 100
        currentNumber / number
}

// mapping function
operators.forEach(operator => {
        operator.addEventListener('click', event => inputOperator(event.target.value))
})

number.forEach(number => {
        number.addEventListener('click', event => {
                inputNumber(event.target.value);
                updateScreen(currentNumber)
        })
})

equal.addEventListener('click', () => {
        calculate('eq pressed')
        updateScreen(currentNumber)
})

clearbtn.addEventListener('click', () => {
        clearAll()
        updateScreen(currentNumber)
})

decimal.addEventListener('click', event => {
        inputDecimal(event.target.value);
        updateScreen(currentNumber)
})

percent.addEventListener('click', event => {
        percentage(event.target.value)
        updateScreen(percentage)
})