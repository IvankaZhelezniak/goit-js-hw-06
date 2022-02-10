const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputName);

function onInputName(event) {
    const valueName = event.currentTarget.value;
    
    valueName === '' ? outputNameRef.textContent = 'Anonymous' : outputNameRef.textContent = valueName;
}
