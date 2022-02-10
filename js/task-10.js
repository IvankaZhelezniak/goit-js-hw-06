function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls input');
const createButtonRef = document.querySelector('#controls [data-create]');
const destroyButtonRef = document.querySelector('#controls [data-destroy]');
const boxesRef = document.querySelector('#boxes');

console.log(inputRef.value);

createButtonRef.addEventListener('click', onButtonClickCreate);
destroyButtonRef.addEventListener('click', destroyBoxes);


function onButtonClickCreate() {
  createBoxes(inputRef.value);
  inputRef.value = '';
}


function createBoxes(amount) {
  inputRef.value = '';
  let sizeBox = 30;
  const items = [];

  for (let i = 0; i < amount; i += 1) {
    console.log(i);
    const divEl = document.createElement('div');
    const size = sizeBox + i * 10;
    divEl.style.cssText = `width:${size}px; height:${size}px;  background-color:${getRandomHexColor()}`;
    console.log(divEl);
    items.push(divEl);
  }
  boxesRef.append(...items);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
}