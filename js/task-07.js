const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', onInputChangeText);

function onInputChangeText(event) {
    const rangeValue = event.currentTarget.value;
    textRef.style.fontSize = `${rangeValue}px`;
}