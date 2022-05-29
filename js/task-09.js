const span = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', changeBodyColor);

function changeBodyColor(event){
  const bodyColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = bodyColor;
  span.textContent = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
