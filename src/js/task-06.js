const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', onEventInputBlur);

function onEventInputBlur(event) {
    const dataLength = parseInt(inputRef.dataset.length);
       console.log(dataLength);
    const lengthValueInput = event.currentTarget.value.length;


    if(lengthValueInput !== dataLength) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    } else {
        inputRef.classList.add('valid');
    }
    if (lengthValueInput === dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    
}