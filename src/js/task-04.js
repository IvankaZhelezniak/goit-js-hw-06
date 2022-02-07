
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');


buttonDecrementRef.addEventListener('click', onButtonDecrement);
buttonIncrementRef.addEventListener('click', onButtonIncrement);

let counterValue = 0;

function onButtonDecrement(event) {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

function onButtonIncrement() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}