/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let displayScreen = ''

/*------------------------ Cached Element References ------------------------*/

const numbersButton = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const signButton = document.querySelectorAll('.operator')
const clearButton = document.querySelector('#clear')
const equalButton = document.querySelector('.equals')


/*----------------------------- Event Listeners -----------------------------*/

numbersButton.forEach(button => {
    button.addEventListener('click', () => {
        displayScreen += button.textContent
        display.textContent = displayScreen

    }) 
})

signButton.forEach(sign => {
    sign.addEventListener('click', () => {
        displayScreen += `${sign.textContent}`
        display.textContent = displayScreen
    })
})

clearButton.addEventListener('click', () => {
    displayScreen = ''; 
    display.textContent = '0'; 
})

/*-------------------------------- Functions --------------------------------*/

