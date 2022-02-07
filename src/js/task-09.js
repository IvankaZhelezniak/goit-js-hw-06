function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanColorRef = document.querySelector('.color');

buttonRef.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  spanColorRef.textContent = getRandomHexColor();
  const colorValue = spanColorRef.textContent;
  bodyRef.style.backgroundColor = colorValue;
}